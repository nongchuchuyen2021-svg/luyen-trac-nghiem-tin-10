import crypto from "node:crypto";

// Ghi một dòng vào Google Sheets từ phía máy chủ Next.js API.
//
// Hỗ trợ 2 phương thức linh hoạt:
// 1. Google Service Account (Khuyên dùng - chính thống, bảo mật cao):
//    - GOOGLE_SERVICE_ACCOUNT_EMAIL
//    - GOOGLE_PRIVATE_KEY
//    - GOOGLE_SHEET_ID
// 2. Google Apps Script Web App URL (Dễ cấu hình chỉ trong 1 phút):
//    - GOOGLE_SHEET_WEBAPP_URL hoặc NEXT_PUBLIC_GOOGLE_SHEET_WEBAPP_URL

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

type CacheToken = { token: string; hetHan: number };
let cache: CacheToken | null = null;

function layCauHinhServiceAccount() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const khoa = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!email || !khoa || !sheetId) return null;
  return { email, khoa, sheetId };
}

function layCauHinhAppsScript() {
  const webAppUrl =
    process.env.GOOGLE_SHEET_WEBAPP_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBAPP_URL ||
    "https://script.google.com/macros/s/AKfycbyOxvMOLQz-gR8pw9CyBP8hDm0KPZYrLlzLkcEs3FIJxTR_SyJcw2R3FQc4qki4If9m/exec";
  return webAppUrl?.trim() || null;
}

export function daCauHinh(): boolean {
  return layCauHinhServiceAccount() !== null || layCauHinhAppsScript() !== null;
}

function base64url(o: unknown) {
  return Buffer.from(JSON.stringify(o)).toString("base64url");
}

async function layAccessToken(email: string, khoa: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cache && cache.hetHan - 60 > now) return cache.token;

  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: email,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const chuaKi = `${base64url(header)}.${base64url(claim)}`;
  const chuKi = crypto.createSign("RSA-SHA256").update(chuaKi).sign(khoa, "base64url");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${chuaKi}.${chuKi}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Không lấy được access token Google (HTTP ${res.status})`);
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cache = { token: data.access_token, hetHan: now + data.expires_in };
  return data.access_token;
}

export interface DuLieuNopDong {
  thoiGian: string;
  hoTen: string;
  lop: string;
  baiId: string;
  tenBai: string;
  dang: string;
  diem: number;
  soCauDung: number;
  tongSoCau: number;
  review?: unknown;
}

/** Ghi thêm một dòng vào cuối Google Sheet */
export async function themDongVaoSheet(dong: (string | number)[], duLieuGoc?: DuLieuNopDong): Promise<{reviewSaved:boolean}|void> {
  const sa = layCauHinhServiceAccount();

  // Ưu tiên 1: Ghi qua Service Account
  if (sa) {
    const token = await layAccessToken(sa.email, sa.khoa);
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${sa.sheetId}` +
      `/values/A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [dong] }),
    });

    if (!res.ok) {
      const chiTiet = await res.text();
      throw new Error(`Ghi Google Sheet thất bại (HTTP ${res.status}): ${chiTiet.slice(0, 300)}`);
    }
    return;
  }

  // Ưu tiên 2: Ghi qua Google Apps Script Web App
  const appsScriptUrl = layCauHinhAppsScript();
  if (appsScriptUrl) {
    const payload = duLieuGoc ?? {
      thoiGian: String(dong[0] ?? ""),
      hoTen: String(dong[1] ?? ""),
      lop: String(dong[2] ?? ""),
      baiId: String(dong[3] ?? ""),
      tenBai: String(dong[4] ?? ""),
      dang: String(dong[5] ?? ""),
      diem: Number(dong[6] ?? 0),
      soCauDung: Number(dong[7] ?? 0),
      tongSoCau: Number(dong[8] ?? 0),
    };

    const res = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Gửi Apps Script thất bại (HTTP ${res.status})`);
    }
    const result = await res.json().catch(() => null) as { ok?: boolean; error?: string; reviewSaved?: boolean } | null;
    if (result?.ok !== true) {
      throw new Error(result?.error || "Apps Script chưa xác nhận đã lưu kết quả");
    }
    return {reviewSaved:result.reviewSaved===true};
  }

  throw new Error("Chưa cấu hình biến môi trường kết nối Google Sheets");
}
