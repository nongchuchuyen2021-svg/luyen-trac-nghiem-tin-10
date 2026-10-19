import { NextResponse } from "next/server";
import { themDongVaoSheet, daCauHinh } from "@/lib/google-sheets";
import { dungMienNopBai } from "@/lib/submission-origin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DANG_HOP_LE = ["Trắc nghiệm", "Đúng/Sai", "Thi thử", "Kiểm tra", "Thường xuyên"] as const;

// Giới hạn tần suất: tối đa 25 lượt nộp trong 10 phút cho mỗi IP
const GIOI_HAN = 25;
const CUA_SO_MS = 10 * 60 * 1000;
const dem = new Map<string, { soLan: number; batDau: number }>();

function quaGioiHan(ip: string): boolean {
  const now = Date.now();
  const cu = dem.get(ip);
  if (!cu || now - cu.batDau > CUA_SO_MS) {
    dem.set(ip, { soLan: 1, batDau: now });
    return false;
  }
  cu.soLan += 1;
  return cu.soLan > GIOI_HAN;
}

function chuoi(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().replace(/\s+/g, " ");
  if (s.length === 0 || s.length > max) return null;
  return s;
}

function so(v: unknown, min: number, max: number): number | null {
  if (typeof v !== "number" || isNaN(v) || v < min || v > max) return null;
  return Math.round(v * 100) / 100;
}

export async function POST(req: Request) {
  if (!dungMienNopBai(req)) {
    return NextResponse.json({ ok: false, loi: "Yêu cầu không hợp lệ (Origin mismatch)" }, { status: 403 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "khong-ro";
  if (quaGioiHan(ip)) {
    return NextResponse.json(
      { ok: false, loi: "Em nộp hơi nhiều lần, vui lòng thử lại sau ít phút nhé!" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, loi: "Dữ liệu gửi lên không đúng định dạng JSON" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const hoTen = chuoi(b.hoTen, 60);
  const lop = chuoi(b.lop, 15);
  const baiId = chuoi(b.baiId, 40);
  const tenBai = chuoi(b.tenBai, 150);
  const dang = typeof b.dang === "string" ? b.dang : null;
  const tongSoCau = so(b.tongSoCau, 1, 200);
  const soCauDung = so(b.soCauDung, 0, tongSoCau ?? 200);
  const diem = so(b.diem, 0, 100);

  if (
    !hoTen ||
    !lop ||
    !baiId ||
    !tenBai ||
    !dang ||
    !DANG_HOP_LE.includes(dang as (typeof DANG_HOP_LE)[number]) ||
    tongSoCau === null ||
    soCauDung === null ||
    diem === null
  ) {
    return NextResponse.json({ ok: false, loi: "Thông tin nộp bài chưa đầy đủ hoặc không hợp lệ" }, { status: 400 });
  }

  if (!daCauHinh()) {
    return NextResponse.json(
      {
        ok: false,
        loi: "Máy chủ chưa cấu hình Google Sheet. Thầy cô vui lòng xem file HUONG_DAN_NOP_BAI.md để cấu hình Vercel Environment Variables.",
      },
      { status: 503 },
    );
  }

  // Chống công thức chèn độc hại (formula injection) vào Google Sheets
  const anToan = (s: string) => (/^[=+\-@]/.test(s) ? `'${s}` : s);
  const thoiGian = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

  const dongDuLieu = [
    thoiGian,
    anToan(hoTen),
    anToan(lop),
    baiId,
    anToan(tenBai),
    dang,
    diem,
    soCauDung,
    tongSoCau,
  ];

  try {
    await themDongVaoSheet(dongDuLieu, {
      thoiGian,
      hoTen: anToan(hoTen),
      lop: anToan(lop),
      baiId,
      tenBai: anToan(tenBai),
      dang,
      diem,
      soCauDung,
      tongSoCau,
    });
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : String(e);
    console.error("Ghi Google Sheet thất bại:", errorMsg);
    return NextResponse.json(
      { ok: false, loi: `Chưa ghi được vào Google Sheet (${errorMsg.slice(0, 100)}). Thầy cô kiểm tra lại quyền chia sẻ Sheet nhé!` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, thoiGian });
}
