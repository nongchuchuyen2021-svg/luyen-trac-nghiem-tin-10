import { DE_KIEM_TRA_TX2, type DeKiemTraThuongXuyen } from "./thuong-xuyen-2";

// Thư mục quản lý danh sách toàn bộ các Đề kiểm tra chính thức
export const DANH_SACH_DE_KIEM_TRA: DeKiemTraThuongXuyen[] = [
  DE_KIEM_TRA_TX2,
];

export function getDeKiemTra(id: string): DeKiemTraThuongXuyen | undefined {
  return DANH_SACH_DE_KIEM_TRA.find((d) => d.id === id);
}

export { DE_KIEM_TRA_TX2, type DeKiemTraThuongXuyen };
