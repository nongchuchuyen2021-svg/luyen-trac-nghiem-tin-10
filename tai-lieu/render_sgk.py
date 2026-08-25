"""Render một khoảng trang của SGK (bản scan) ra ảnh PNG để đọc.

    python tai-lieu/render_sgk.py <trang_pdf_dau> <trang_pdf_cuoi>

Nhớ quy đổi: trang PDF thường lệch với số trang in trên sách (do có trang
bìa/mục lục không đánh số) — mở thử vài trang đầu để xác định độ lệch trước
khi tạo bản đồ trang.
"""
import os, sys
import fitz

PDF = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    "SGK Tin10 Ket noi tri thuc va cuoc song.pdf")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sgk-pages")

def main():
    if len(sys.argv) != 3:
        print(__doc__); sys.exit(1)
    dau, cuoi = int(sys.argv[1]), int(sys.argv[2])
    os.makedirs(OUT, exist_ok=True)
    doc = fitz.open(PDF)
    for i in range(dau - 1, min(cuoi, doc.page_count)):
        f = os.path.join(OUT, f"p{i+1:03d}.png")
        doc[i].get_pixmap(dpi=110).save(f)
        print(f"{f}  (trang PDF {i+1})")

if __name__ == "__main__":
    main()
