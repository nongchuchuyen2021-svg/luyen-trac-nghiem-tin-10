"use client";

import { useEffect, useRef, useState } from "react";
import { getHocSinh, saveHocSinh, hopLe, chuanHoa, MAX_HO_TEN, MAX_LOP } from "@/lib/hocsinh";

type TrangThai = "nhap" | "sansang" | "danggui" | "xong" | "loi";

export default function NopBai({
  baiId,
  tenBai,
  dang,
  diem,
  soCauDung,
  tongSoCau,
  diemChu,
  autoSubmit = false,
}: {
  baiId: string;
  tenBai: string;
  dang: "Trắc nghiệm" | "Đúng/Sai" | "Thi thử" | "Kiểm tra" | "Thường xuyên";
  diem: number;
  soCauDung: number;
  tongSoCau: number;
  diemChu?: string;
  autoSubmit?: boolean;
}) {
  const [trangThai, setTrangThai] = useState<TrangThai>("nhap");
  const [hoTen, setHoTen] = useState("");
  const [lop, setLop] = useState("");
  const [loi, setLoi] = useState("");
  const [thoiGianNop, setThoiGianNop] = useState("");
  const dangGuiRef = useRef(false);
  const daTuDongGuiRef = useRef(false);

  useEffect(() => {
    const hs = getHocSinh();
    if (hs) {
      setHoTen(hs.hoTen);
      setLop(hs.lop);
      setTrangThai("sansang");
    }
  }, []);

  const dayDu = hopLe({ hoTen, lop });

  useEffect(() => {
    if (autoSubmit && dayDu && !daTuDongGuiRef.current) {
      daTuDongGuiRef.current = true;
      void nop();
    }
    // Tự động một lần khi thông tin học sinh được nạp; lỗi thì cho thử lại thủ công.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSubmit, dayDu]);

  async function nop() {
    if (!dayDu || dangGuiRef.current || trangThai === "xong") return;
    dangGuiRef.current = true;
    const sach = chuanHoa({ hoTen, lop });
    setHoTen(sach.hoTen);
    setLop(sach.lop);
    saveHocSinh(sach);
    setTrangThai("danggui");
    setLoi("");

    try {
      const res = await fetch("/api/nop-bai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hoTen: sach.hoTen,
          lop: sach.lop,
          baiId,
          tenBai,
          dang,
          diem,
          soCauDung,
          tongSoCau,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        loi?: string;
        thoiGian?: string;
      } | null;

      if (res.ok && data?.ok) {
        setThoiGianNop(data.thoiGian || new Date().toLocaleTimeString("vi-VN"));
        setTrangThai("xong");
      } else {
        setLoi(data?.loi ?? "Chưa gửi được lên bảng tính, em thử lại nhé!");
        setTrangThai("loi");
      }
    } catch {
      setLoi("Máy không kết nối được mạng, em kiểm tra kết nối rồi thử lại nhé!");
      setTrangThai("loi");
    } finally {
      dangGuiRef.current = false;
    }
  }

  if (trangThai === "xong") {
    return (
      <div className="mt-5 animate-pop-in rounded-2xl border-2 border-mint/40 bg-mint/[0.08] p-5 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mint/20 text-3xl">
          📊
        </div>
        <p className="mt-3 font-display text-lg font-bold text-mint-deep">
          Đã lưu kết quả vào Google Sheet của thầy cô!
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          <span className="font-semibold text-ink">{hoTen}</span> · Lớp{" "}
          <span className="font-semibold text-ink">{lop}</span> · {dang} ·{" "}
          <span className="font-bold text-mint-deep">{diemChu ?? `${diem} điểm`}</span>
        </p>
        {thoiGianNop && (
          <p className="mt-2 font-mono text-xs text-ink-soft/70">
            Thời điểm nộp: {thoiGianNop}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-2xl border border-ink/10 bg-white p-5 text-left shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-grape/10 text-xl">
          📤
        </span>
        <div>
          <h4 className="font-display text-base font-bold text-ink">
            Nộp kết quả bài làm vào Google Sheet
          </h4>
          <p className="text-xs text-ink-soft">
            Điền họ tên và lớp để lưu kết quả vào bảng điểm của giáo viên bộ môn
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="font-mono text-xs font-medium text-ink-soft">Họ và tên học sinh *</span>
          <input
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            maxLength={MAX_HO_TEN}
            placeholder="Ví dụ: Hoàng Minh Châu"
            disabled={trangThai === "danggui"}
            className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm font-medium text-ink placeholder:text-ink-soft/40 focus:border-grape focus:outline-none focus:ring-2 focus:ring-grape/20 disabled:opacity-60"
          />
        </label>
        <label className="block sm:w-32">
          <span className="font-mono text-xs font-medium text-ink-soft">Lớp *</span>
          <input
            value={lop}
            onChange={(e) => setLop(e.target.value)}
            maxLength={MAX_LOP}
            placeholder="Ví dụ: 10A1"
            disabled={trangThai === "danggui"}
            className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm font-medium uppercase text-ink placeholder:text-ink-soft/40 focus:border-grape focus:outline-none focus:ring-2 focus:ring-grape/20 disabled:opacity-60"
          />
        </label>
      </div>

      {trangThai === "loi" && (
        <div className="mt-3 rounded-xl border border-tomato/30 bg-tomato/10 p-3 text-xs leading-relaxed text-tomato-deep">
          ⚠️ {loi}
        </div>
      )}

      <button
        onClick={nop}
        disabled={!dayDu || trangThai === "danggui"}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-grape to-bubble px-5 py-3 font-semibold text-white shadow-md transition hover:opacity-95 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
      >
        {trangThai === "danggui" ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Đang ghi lên Google Sheet...</span>
          </>
        ) : trangThai === "loi" ? (
          "Thử nộp lại kết quả"
        ) : (
          "Gửi kết quả lên Google Sheet cho thầy cô 🚀"
        )}
      </button>

      {!dayDu && (hoTen !== "" || lop !== "") && (
        <p className="mt-2 text-center font-mono text-xs text-ink-soft/70">
          Vui lòng nhập đầy đủ họ và tên (có dấu cách) và tên lớp (ví dụ: 10A1, 10A2)
        </p>
      )}
    </div>
  );
}
