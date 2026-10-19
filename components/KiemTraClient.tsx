"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question, TFQuestion } from "@/lib/types";
import { saveAttempt, getLessonProgress } from "@/lib/progress";
import { scrollIntoViewIfNeeded } from "@/components/QuizClient";
import Confetti from "@/components/Confetti";
import {
  taoDeKiemTra,
  CAU_HINH_DE,
  DIEM_D2_CHUAN,
  PHAM_VI_ON_TAP,
  type KieuKiemTra,
  type DeKiemTra,
  type PhamViKiemTra,
} from "@/lib/kiemtra";
import { playCorrect, playWrong, playCelebration, playClick } from "@/lib/sound";
import NopBai from "@/components/NopBai";

const OPTION_LABELS = ["A", "B", "C", "D"];
const Y_LABELS = ["a", "b", "c", "d"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type CauD1DaTron = Question & { shuffledOptions: string[]; correctIndex: number };

function tronDe(de: DeKiemTra): { d1: CauD1DaTron[]; d2: TFQuestion[]; phamVi: PhamViKiemTra } {
  const d1 = de.d1.map((q) => {
    const order = shuffle([0, 1, 2, 3]);
    return {
      ...q,
      shuffledOptions: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.answer),
    };
  });
  return { d1, d2: de.d2, phamVi: de.phamVi };
}

function vn(n: number, chuSo = 1): string {
  return n.toFixed(chuSo).replace(".", ",");
}

function dinhDangGio(giay: number): string {
  const m = Math.floor(giay / 60);
  const s = giay % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function KiemTraClient() {
  const [giaiDoan, setGiaiDoan] = useState<"gioi-thieu" | "dang-lam" | "da-nop">("gioi-thieu");
  const [loaiKiemTra, setLoaiKiemTra] = useState<KieuKiemTra>("45-phut");
  const [phamViId, setPhamViId] = useState<string>("all");
  const [de, setDe] = useState<{ d1: CauD1DaTron[]; d2: TFQuestion[]; phamVi: PhamViKiemTra } | null>(null);
  const [dapAnD1, setDapAnD1] = useState<(number | null)[]>([]);
  const [dapAnD2, setDapAnD2] = useState<(boolean | null)[][]>([]);
  const [cauHienTai, setCauHienTai] = useState(0);
  const [giayConLai, setGiayConLai] = useState(45 * 60);
  const [hoiXacNhanNop, setHoiXacNhanNop] = useState(false);
  const [kyLuc, setKyLuc] = useState<number | null>(null);
  const cauHoiRef = useRef<HTMLDivElement>(null);

  const khoaTienDo = `kiem-tra-${loaiKiemTra}-${phamViId}`;

  useEffect(() => {
    setKyLuc(getLessonProgress(khoaTienDo)?.best ?? null);
  }, [khoaTienDo]);

  useEffect(() => {
    if (giaiDoan !== "dang-lam") return;
    const id = setInterval(() => {
      setGiayConLai((g) => {
        if (g <= 1) {
          clearInterval(id);
          return 0;
        }
        return g - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [giaiDoan]);

  useEffect(() => {
    if (giaiDoan === "dang-lam" && giayConLai === 0) nopBai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [giayConLai, giaiDoan]);

  useEffect(() => {
    scrollIntoViewIfNeeded(cauHoiRef.current);
  }, [cauHienTai]);

  function batDau() {
    playClick();
    const config = CAU_HINH_DE[loaiKiemTra];
    const deGoc = taoDeKiemTra(loaiKiemTra, phamViId);
    const bo = tronDe(deGoc);
    setDe(bo);
    setDapAnD1(bo.d1.map(() => null));
    setDapAnD2(bo.d2.map(() => [null, null, null, null]));
    setCauHienTai(0);
    setGiayConLai(config.thoiGianGiay);
    setHoiXacNhanNop(false);
    setGiaiDoan("dang-lam");
  }

  const tongSoCau = de ? de.d1.length + de.d2.length : 0;
  const soCauChuaLam = useMemo(() => {
    if (!de) return 0;
    const thieuD1 = dapAnD1.filter((a) => a === null).length;
    const thieuD2 = dapAnD2.filter((y) => y.some((a) => a === null)).length;
    return thieuD1 + thieuD2;
  }, [de, dapAnD1, dapAnD2]);

  function chonD1(cauIndex: number, phuongAn: number) {
    playClick();
    setDapAnD1((prev) => prev.map((a, i) => (i === cauIndex ? phuongAn : a)));
  }

  function chonD2(cauIndex: number, yIndex: number, giaTri: boolean) {
    playClick();
    setDapAnD2((prev) =>
      prev.map((cau, i) => (i === cauIndex ? cau.map((a, j) => (j === yIndex ? giaTri : a)) : cau)),
    );
  }

  function tinhDiemCauD2(soYDung: number, loai: KieuKiemTra): number {
    if (loai === "15-phut") {
      // 1 câu D2 duy nhất chiếm 4.0 điểm
      const thangDiem15p = [0, 0.4, 1.0, 2.0, 4.0];
      return thangDiem15p[soYDung] ?? 0;
    }
    // 45 phút: mỗi câu 1.0 điểm
    return DIEM_D2_CHUAN[soYDung] ?? 0;
  }

  function nopBai() {
    if (!de) return;
    const config = CAU_HINH_DE[loaiKiemTra];
    const soCauDungD1 = de.d1.filter((q, i) => dapAnD1[i] === q.correctIndex).length;
    const diemD1 = soCauDungD1 * config.diemMoiCauD1;
    const diemD2 = de.d2.reduce((tong, q, i) => {
      const soYDung = q.statements.filter((st, j) => dapAnD2[i][j] === st.answer).length;
      return tong + tinhDiemCauD2(soYDung, loaiKiemTra);
    }, 0);
    const diemTong = Math.min(10, diemD1 + diemD2);
    const phanTram = Math.round((diemTong / config.diemToiDa) * 100);

    saveAttempt(khoaTienDo, phanTram);
    setKyLuc((k) => Math.max(k ?? 0, phanTram));
    setGiaiDoan("da-nop");

    if (diemTong >= 8.0) {
      playCelebration();
    } else {
      playCorrect();
    }
  }

  function bamNop() {
    if (soCauChuaLam > 0 && !hoiXacNhanNop) {
      setHoiXacNhanNop(true);
      return;
    }
    nopBai();
  }

  // ───────────────────────────────────────────────────────────────────────────
  // MÀN HÌNH 1: GIỚI THIỆU & CHỌN CẤU HÌNH KIỂM TRA
  // ───────────────────────────────────────────────────────────────────────────
  if (giaiDoan === "gioi-thieu") {
    const config = CAU_HINH_DE[loaiKiemTra];
    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-10 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft transition hover:text-ink"
          >
            ← Quay lại trang chủ
          </Link>

          <header className="mt-5 text-center">
            <span className="inline-block rounded-full border border-sea/30 bg-sea/10 px-4 py-1.5 font-mono text-xs font-bold text-sea-deep">
              CHẾ ĐỘ ĐÁNH GIÁ ĐỊNH KỲ GDPT 2018
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              🎯 Phòng Kiểm Tra Tin Học 10
            </h1>
            <p className="mt-2 text-sm text-ink-soft">
              Đề thi tự động trộn từ ngân hàng 34 bài SGK Kết nối tri thức. Bấm giờ thật, chấm điểm ngay, có giải thích chi tiết.
            </p>
          </header>

          {/* BANNER ĐỀ KIỂM TRA THƯỜNG XUYÊN 2 */}
          <div className="mt-6 rounded-2xl border-2 border-grape/30 bg-gradient-to-r from-grape/10 via-purple-50/70 to-bubble/10 p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="rounded-full bg-grape/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-grape-deep">
                  ✨ ĐỀ KIỂM TRA CHUẨN MA TRẬN
                </span>
                <h3 className="mt-1.5 font-display text-base font-bold text-ink sm:text-lg">
                  Đề Kiểm Tra Thường Xuyên 2 (Bài 1, 2, 7, 8, 9)
                </h3>
                <p className="mt-0.5 text-xs text-ink-soft">
                  15 câu theo mức độ · 16 phút · Tự động chấm điểm và lưu kết quả vào Google Sheets
                </p>
              </div>
              <Link
                href="/kiem-tra/thuong-xuyen-2"
                className="shrink-0 rounded-xl bg-gradient-to-r from-grape to-bubble px-4 py-2.5 text-center font-display text-xs font-bold text-white shadow-md transition hover:opacity-95"
              >
                Vào làm đề này ngay →
              </Link>
            </div>
          </div>

          {/* Chọn Loại kiểm tra */}
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft">
              1. Chọn hình thức kiểm tra:
            </label>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(Object.keys(CAU_HINH_DE) as KieuKiemTra[]).map((k) => {
                const c = CAU_HINH_DE[k];
                const active = loaiKiemTra === k;
                return (
                  <button
                    key={k}
                    onClick={() => {
                      playClick();
                      setLoaiKiemTra(k);
                    }}
                    className={`rounded-xl border-2 p-3 text-left transition ${
                      active
                        ? "border-sea bg-sea/10 text-sea-deep shadow-md"
                        : "border-ink/10 bg-white/60 text-ink hover:border-ink/20"
                    }`}
                  >
                    <div className="font-display text-sm font-bold">{c.tenLoai}</div>
                    <div className="mt-1 font-mono text-xs text-ink-soft">
                      ⏱️ {c.thoiGianGiay / 60} phút · {c.soCauD1 + c.soCauD2} câu
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Chọn Phạm vi nội dung */}
            <label className="mt-6 block text-xs font-bold uppercase tracking-wider text-ink-soft">
              2. Chọn phạm vi kiến thức:
            </label>
            <select
              value={phamViId}
              onChange={(e) => {
                playClick();
                setPhamViId(e.target.value);
              }}
              className="mt-2 w-full rounded-xl border border-ink/20 bg-white px-4 py-2.5 text-sm font-medium text-ink outline-none transition focus:border-sea"
            >
              {PHAM_VI_ON_TAP.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            {/* Thông số đề */}
            <div className="mt-6 rounded-xl border border-sea/20 bg-sea/5 p-4 text-xs text-ink-soft">
              <div className="font-bold text-sea-deep">📋 Cấu trúc đề thi dự kiến:</div>
              <ul className="mt-2 space-y-1">
                <li>• <strong>Phần I:</strong> {config.soCauD1} câu trắc nghiệm 4 phương án (tối đa {vn(config.diemToiDaD1)} điểm).</li>
                <li>• <strong>Phần II:</strong> {config.soCauD2} câu tình huống Đúng/Sai 4 ý (tối đa {vn(config.diemToiDaD2)} điểm).</li>
                <li>• <strong>Tổng điểm:</strong> 10,0 điểm · Thời gian làm bài: {config.thoiGianGiay / 60} phút.</li>
              </ul>
            </div>

            {kyLuc !== null && (
              <p className="mt-4 text-center font-mono text-xs text-sea-deep">
                🏆 Điểm cao nhất của em ở chế độ này: <strong>{kyLuc}%</strong>
              </p>
            )}

            <button
              onClick={batDau}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-sea to-coral py-3.5 font-display text-base font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99]"
            >
              Bắt đầu làm bài thi ngay →
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // MÀN HÌNH 2: ĐANG LÀM BÀI
  // ───────────────────────────────────────────────────────────────────────────
  if (giaiDoan === "dang-lam" && de) {
    const config = CAU_HINH_DE[loaiKiemTra];
    const sapHetGio = giayConLai <= 5 * 60;
    const laCauD1 = cauHienTai < de.d1.length;
    const cauIndexD1 = cauHienTai;
    const cauIndexD2 = cauHienTai - de.d1.length;

    return (
      <main className="playground min-h-screen pb-28">
        {/* Sticky Header đồng hồ */}
        <div className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-ink">
                {config.tenLoai}
              </span>
              <span className="rounded-full bg-ink/5 px-2 py-0.5 font-mono text-xs text-ink-soft">
                Câu {cauHienTai + 1}/{tongSoCau}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-bold ${
                  sapHetGio ? "animate-pulse bg-berry/15 text-berry" : "bg-sea/15 text-sea-deep"
                }`}
              >
                ⏱️ {dinhDangGio(giayConLai)}
              </div>
              <button
                onClick={bamNop}
                className="rounded-full bg-coral px-4 py-1.5 font-display text-xs font-bold text-white transition hover:bg-coral/90"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 pt-6 sm:px-8" ref={cauHoiRef}>
          {/* Cảnh báo chưa làm hết */}
          {hoiXacNhanNop && soCauChuaLam > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-berry/40 bg-berry/10 p-4 text-sm text-berry">
              <p className="font-bold">⚠️ Em vẫn còn {soCauChuaLam} câu chưa hoàn thành!</p>
              <p className="mt-1 text-xs text-ink-soft">
                Em có chắc chắn muốn nộp bài sớm không? Bấm nút <strong>"Xác nhận nộp"</strong> bên dưới để hoàn tất.
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={nopBai}
                  className="rounded-lg bg-berry px-3 py-1.5 font-bold text-white text-xs"
                >
                  Xác nhận nộp
                </button>
                <button
                  onClick={() => setHoiXacNhanNop(false)}
                  className="rounded-lg border border-ink/20 bg-white px-3 py-1.5 font-bold text-xs text-ink"
                >
                  Tiếp tục làm bài
                </button>
              </div>
            </div>
          )}

          {/* DẠNG 1: TRẮC NGHIỆM 4 PHƯƠNG ÁN */}
          {laCauD1 && (
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between text-xs text-ink-soft">
                <span className="font-bold uppercase tracking-wider text-sea-deep">
                  Phần I · Trắc nghiệm nhiều lựa chọn
                </span>
                <span className="font-mono">+{config.diemMoiCauD1} điểm</span>
              </div>

              <h2 className="mt-3 text-base font-semibold leading-relaxed text-ink sm:text-lg">
                Câu {cauHienTai + 1}: {de.d1[cauIndexD1].q}
              </h2>

              {de.d1[cauIndexD1].code && (
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-cyan-300">
                  {de.d1[cauIndexD1].code}
                </pre>
              )}

              <div className="mt-5 space-y-2.5">
                {de.d1[cauIndexD1].shuffledOptions.map((opt, optIdx) => {
                  const daChon = dapAnD1[cauIndexD1] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => chonD1(cauIndexD1, optIdx)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition ${
                        daChon
                          ? "border-sea bg-sea/10 font-medium text-sea-deep shadow-sm"
                          : "border-ink/10 bg-white/60 text-ink hover:border-ink/20"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                          daChon ? "bg-sea text-white" : "bg-ink/5 text-ink-soft"
                        }`}
                      >
                        {OPTION_LABELS[optIdx]}
                      </span>
                      <span className="flex-1 leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* DẠNG 2: ĐÚNG / SAI 4 MỆNH ĐỀ */}
          {!laCauD1 && (
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between text-xs text-ink-soft">
                <span className="font-bold uppercase tracking-wider text-coral">
                  Phần II · Đúng / Sai theo tình huống
                </span>
                <span className="font-mono">Tối đa {loaiKiemTra === "15-phut" ? "4.0" : "1.0"} điểm</span>
              </div>

              <div className="mt-3 rounded-xl border border-coral/20 bg-coral/5 p-4 text-sm text-ink leading-relaxed">
                <strong>Tình huống:</strong> {de.d2[cauIndexD2].context}
              </div>

              {de.d2[cauIndexD2].code && (
                <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-cyan-300">
                  {de.d2[cauIndexD2].code}
                </pre>
              )}

              <div className="mt-5 space-y-3">
                {de.d2[cauIndexD2].statements.map((st, stIdx) => {
                  const val = dapAnD2[cauIndexD2][stIdx];
                  return (
                    <div
                      key={stIdx}
                      className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-white/70 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-start gap-2.5 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/15 font-mono text-xs font-bold text-coral">
                          {Y_LABELS[stIdx]}
                        </span>
                        <span className="leading-snug text-ink">{st.text}</span>
                      </div>

                      <div className="flex shrink-0 gap-2 self-end sm:self-center">
                        <button
                          onClick={() => chonD2(cauIndexD2, stIdx, true)}
                          className={`rounded-lg px-3 py-1 font-mono text-xs font-bold transition ${
                            val === true
                              ? "bg-leaf text-white shadow"
                              : "border border-ink/20 bg-white text-ink-soft hover:border-leaf hover:text-leaf"
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          onClick={() => chonD2(cauIndexD2, stIdx, false)}
                          className={`rounded-lg px-3 py-1 font-mono text-xs font-bold transition ${
                            val === false
                              ? "bg-berry text-white shadow"
                              : "border border-ink/20 bg-white text-ink-soft hover:border-berry hover:text-berry"
                          }`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Thanh chuyển câu bên dưới */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => {
                playClick();
                setCauHienTai((c) => Math.max(0, c - 1));
              }}
              disabled={cauHienTai === 0}
              className="rounded-xl border border-ink/10 bg-white px-4 py-2 font-display text-sm font-semibold text-ink shadow-sm transition disabled:opacity-30"
            >
              ← Câu trước
            </button>

            <button
              onClick={() => {
                playClick();
                setCauHienTai((c) => Math.min(tongSoCau - 1, c + 1));
              }}
              disabled={cauHienTai === tongSoCau - 1}
              className="rounded-xl bg-sea px-5 py-2 font-display text-sm font-bold text-white shadow-sm transition hover:bg-sea/90 disabled:opacity-30"
            >
              Câu tiếp →
            </button>
          </div>

          {/* Ma trận lưới các câu để nhảy nhanh */}
          <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
            <div className="text-xs font-bold uppercase tracking-wider text-ink-soft">
              Bảng trạng thái làm bài ({tongSoCau - soCauChuaLam}/{tongSoCau})
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from({ length: tongSoCau }, (_, i) => {
                const laD1 = i < de.d1.length;
                const daLam = laD1
                  ? dapAnD1[i] !== null
                  : dapAnD2[i - de.d1.length].every((a) => a !== null);
                const dangChon = i === cauHienTai;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      playClick();
                      setCauHienTai(i);
                    }}
                    className={`h-8 w-8 rounded-lg font-mono text-xs font-bold transition ${
                      dangChon
                        ? "ring-2 ring-sea ring-offset-2 bg-sea text-white"
                        : daLam
                        ? "bg-leaf/20 text-leaf-deep border border-leaf/40"
                        : "bg-ink/5 text-ink-soft border border-ink/10 hover:border-ink/30"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // MÀN HÌNH 3: TỔNG KẾT & XEM LẠI BÀI ĐÃ NỘP
  // ───────────────────────────────────────────────────────────────────────────
  if (giaiDoan === "da-nop" && de) {
    const config = CAU_HINH_DE[loaiKiemTra];
    const soCauDungD1 = de.d1.filter((q, i) => dapAnD1[i] === q.correctIndex).length;
    const diemD1 = soCauDungD1 * config.diemMoiCauD1;
    const diemD2 = de.d2.reduce((tong, q, i) => {
      const soYDung = q.statements.filter((st, j) => dapAnD2[i][j] === st.answer).length;
      return tong + tinhDiemCauD2(soYDung, loaiKiemTra);
    }, 0);
    const diemTong = Math.min(10, diemD1 + diemD2);
    const phanTram = Math.round((diemTong / config.diemToiDa) * 100);

    return (
      <main className="playground min-h-screen pb-16">
        {diemTong >= 8.0 && <Confetti />}

        <div className="mx-auto max-w-2xl px-5 pt-10 sm:px-8">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-card">
            <span className="text-5xl">{diemTong >= 8.0 ? "🎉" : diemTong >= 5.0 ? "👍" : "💪"}</span>
            <h1 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
              Kết quả {config.tenLoai}
            </h1>
            <p className="mt-1 font-mono text-xs text-ink-soft">
              {de.d1.length + de.d2.length} câu hỏi · {PHAM_VI_ON_TAP.find((p) => p.id === phamViId)?.name ?? "Tất cả"}
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <div className="rounded-2xl bg-sea/10 p-4 border border-sea/30">
                <div className="font-display text-4xl font-extrabold text-sea-deep">
                  {vn(diemTong)}
                </div>
                <div className="mt-1 text-xs text-ink-soft">Điểm số / 10,0</div>
              </div>
              <div className="rounded-2xl bg-gold/10 p-4 border border-gold/30">
                <div className="font-display text-4xl font-extrabold text-gold-deep">
                  {phanTram}%
                </div>
                <div className="mt-1 text-xs text-ink-soft">Tỷ lệ chính xác</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-ink-soft">
              Phần I: <strong>{vn(diemD1)} / {vn(config.diemToiDaD1)}đ</strong> ({soCauDungD1}/{de.d1.length} câu đúng) · Phần II: <strong>{vn(diemD2)} / {vn(config.diemToiDaD2)}đ</strong>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={batDau}
                className="flex-1 rounded-xl bg-sea py-3 font-display text-sm font-bold text-white shadow-card transition hover:bg-sea/90"
              >
                Làm đề thi mới 🔄
              </button>
              <Link
                href="/"
                className="flex-1 rounded-xl border border-ink/20 bg-white py-3 font-display text-sm font-semibold text-ink shadow-sm transition hover:bg-ink/5"
              >
                Về trang chủ 🏠
              </Link>
            </div>

            {/* NỘP KẾT QUẢ VÀO GOOGLE SHEET */}
            <NopBai
              baiId={khoaTienDo}
              tenBai={`Kiểm tra ${config.tenLoai} (${de.phamVi.name})`}
              dang="Kiểm tra"
              diem={diemTong}
              soCauDung={soCauDungD1}
              tongSoCau={de.d1.length + de.d2.length}
              diemChu={`${vn(diemTong)}/10 điểm`}
            />
          </div>

          {/* DANH SÁCH CHI TIẾT CÂU HỎI VÀ ĐÁP ÁN */}
          <div className="mt-10 space-y-6">
            <h2 className="font-display text-xl font-bold text-ink">
              📖 Đối chiếu chi tiết bài làm & lời giải:
            </h2>

            {/* PHẦN 1 */}
            {de.d1.map((q, i) => {
              const daChon = dapAnD1[i];
              const dung = daChon === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 shadow-card ${
                    dung ? "border-leaf/40 bg-white" : "border-berry/30 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-ink-soft">Câu {i + 1} (Phần I)</span>
                    <span className={dung ? "font-bold text-leaf-deep" : "font-bold text-berry"}>
                      {dung ? "✅ Đúng (+0,25đ)" : "❌ Sai (0đ)"}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{q.q}</h3>
                  {q.code && (
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 font-mono text-xs text-cyan-300">
                      {q.code}
                    </pre>
                  )}
                  <div className="mt-3 space-y-1.5 text-xs">
                    {q.shuffledOptions.map((opt, optIdx) => {
                      const laDung = optIdx === q.correctIndex;
                      const laChon = optIdx === daChon;
                      return (
                        <div
                          key={optIdx}
                          className={`rounded-lg p-2 ${
                            laDung
                              ? "bg-leaf/15 font-bold text-leaf-deep"
                              : laChon
                              ? "bg-berry/15 font-bold text-berry"
                              : "text-ink-soft"
                          }`}
                        >
                          {OPTION_LABELS[optIdx]}. {opt} {laDung && "✓ (Đáp án chuẩn)"} {laChon && !laDung && "✗ (Em chọn)"}
                        </div>
                      );
                    })}
                  </div>
                  {q.explain && (
                    <p className="mt-3 rounded-lg bg-ink/5 p-2.5 text-xs text-ink-soft">
                      💡 <strong>Giải thích:</strong> {q.explain}
                    </p>
                  )}
                </div>
              );
            })}

            {/* PHẦN 2 */}
            {de.d2.map((q, i) => {
              const cauIdx = de.d1.length + i;
              return (
                <div key={q.id} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
                  <div className="text-xs font-mono font-bold text-coral">
                    Câu {cauIdx + 1} (Phần II · Đúng / Sai)
                  </div>
                  <p className="mt-2 text-xs text-ink leading-relaxed font-medium bg-coral/5 p-3 rounded-lg">
                    {q.context}
                  </p>
                  <div className="mt-3 space-y-2">
                    {q.statements.map((st, j) => {
                      const daChon = dapAnD2[i][j];
                      const dung = daChon === st.answer;
                      return (
                        <div key={j} className="rounded-lg border border-ink/10 p-2.5 text-xs">
                          <div className="flex items-center justify-between font-mono">
                            <span className="font-bold text-ink">Ý {Y_LABELS[j]}:</span>
                            <span className={dung ? "text-leaf-deep font-bold" : "text-berry font-bold"}>
                              {dung ? "✅ Đúng" : "❌ Sai"} (Em: {daChon === true ? "Đúng" : daChon === false ? "Sai" : "Chưa chọn"} | Đáp án: {st.answer ? "Đúng" : "Sai"})
                            </span>
                          </div>
                          <p className="mt-1 text-ink">{st.text}</p>
                          <p className="mt-1 text-ink-soft">💡 {st.explain}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  return null;
}
