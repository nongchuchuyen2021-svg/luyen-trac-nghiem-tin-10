#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
shuffle_answers.py — Xáo trộn vị trí đáp án đúng trong toàn bộ file dữ liệu
(gồm cả phần Trắc nghiệm, Game Đấu trường, và các câu hỏi trong phần Lý thuyết).

Trước khi chạy:  Phần lớn câu hỏi đặt đáp án đúng ở vị trí 0 (A).
Sau khi chạy:    Đáp án đúng được phân bố ngẫu nhiên đều ở 4 vị trí 0–3 (A, B, C, D).
Bảo toàn 100% nội dung và tính đúng đắn của từng câu hỏi.

Chạy:  python shuffle_answers.py
       (từ thư mục gốc dự án luyen-trac-nghiem-tin-10)
"""
import os
import re
import random
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')
random.seed(2026)


def parse_strings(text):
    """Tách các chuỗi string được bao bởi nháy kép/đơn/backtick."""
    result = []
    i = 0
    while i < len(text):
        ch = text[i]
        if ch in ('"', "'", '`'):
            j = i + 1
            while j < len(text):
                if text[j] == '\\':
                    j += 2
                    continue
                if text[j] == ch:
                    result.append(text[i:j + 1])
                    i = j + 1
                    break
                j += 1
            else:
                break
        else:
            i += 1
    return result


def is_string_line(line):
    """Dòng này có phải chỉ chứa một chuỗi string option hay không?"""
    s = line.strip().rstrip(',').strip()
    return len(s) >= 2 and (
        (s[0] == '"' and s[-1] == '"') or
        (s[0] == "'" and s[-1] == "'") or
        (s[0] == '`' and s[-1] == '`')
    )


def find_answer(lines, start, gap=6):
    """Tìm dòng chứa 'answer: N' trong phạm vi gap dòng kể từ start."""
    for j in range(start, min(start + gap, len(lines))):
        m = re.search(r'\banswer:\s*(\d+)', lines[j])
        if m:
            return j, int(m.group(1))
    return None, None


def do_shuffle(items, old_ans):
    """Xáo trộn danh sách items, trả về (new_items, new_answer_index)."""
    n = len(items)
    perm = list(range(n))
    random.shuffle(perm)
    new_items = [items[perm[k]] for k in range(n)]
    new_ans = next(k for k in range(n) if perm[k] == old_ans)
    return new_items, new_ans


def process_file(filepath):
    """Đọc file, xáo trộn vị trí đáp án, ghi lại. Trả về số câu đã sửa."""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    out = []
    i = 0
    cnt = 0

    while i < len(lines):
        ln = lines[i]

        # Tìm dòng bắt đầu bằng  options: [
        if not re.match(r'\s*options:\s*\[', ln):
            out.append(ln)
            i += 1
            continue

        stripped = ln.strip()

        # ─── Inline: options: ["…", "…", "…", "…"], ───
        if '[' in stripped and re.search(r'\]\s*,?\s*$', stripped):
            bo = ln.index('[')
            bc = ln.rindex(']')
            inner = ln[bo + 1 : bc]
            opts = parse_strings(inner)

            if len(opts) == 4:
                aidx, old_a = find_answer(lines, i + 1)
                if aidx is not None:
                    new_opts, new_a = do_shuffle(opts, old_a)
                    rebuilt = ', '.join(new_opts)
                    out.append(ln[: bo + 1] + rebuilt + ln[bc:])
                    for k in range(i + 1, aidx):
                        out.append(lines[k])
                    out.append(
                        re.sub(r'(answer:\s*)\d+', rf'\g<1>{new_a}', lines[aidx])
                    )
                    cnt += 1
                    i = aidx + 1
                    continue

            out.append(ln)
            i += 1
            continue

        # ─── Multi-line: options: [\n  "…",\n  …\n ], ───
        header = ln
        items = []
        i += 1
        while i < len(lines):
            s = lines[i].strip()
            if s in ('],', ']'):
                break
            items.append(lines[i])
            i += 1
        closer = lines[i] if i < len(lines) else None

        if len(items) == 4 and all(is_string_line(it) for it in items):
            aidx, old_a = find_answer(lines, i + 1)
            if aidx is not None:
                # Chuẩn hoá dấu phẩy cuối dòng
                norm_items = []
                for it in items:
                    st = it.rstrip('\r\n')
                    if not st.endswith(','):
                        norm_items.append(st + ',\n')
                    else:
                        norm_items.append(st + '\n')

                new_items, new_a = do_shuffle(norm_items, old_a)
                out.append(header)
                out.extend(new_items)
                if closer:
                    out.append(closer)
                for k in range(i + 1, aidx):
                    out.append(lines[k])
                out.append(
                    re.sub(r'(answer:\s*)\d+', rf'\g<1>{new_a}', lines[aidx])
                )
                cnt += 1
                i = aidx + 1
                continue

        # Fallback: giữ nguyên
        out.append(header)
        out.extend(items)
        if closer:
            out.append(closer)
        i += 1

    if cnt:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(out)
    return cnt


def main():
    total = 0
    print('=' * 60)
    print(' XÁO TRỘN VỊ TRÍ ĐÁP ÁN ĐÚNG (TRẮC NGHIỆM, GAME, LÝ THUYẾT)')
    print('=' * 60)
    print()

    targets = [
        ('data/questions', '📚 Trắc nghiệm bài học'),
        ('data/games',     '🎮 Game & Đấu trường'),
        ('data/theory',    '📖 Câu hỏi củng cố Lý thuyết'),
    ]

    for folder, label in targets:
        if not os.path.isdir(folder):
            print(f'  ⚠️  Không tìm thấy thư mục {folder}')
            continue
        print(f'{label} ({folder}/):')
        sub_total = 0
        for fn in sorted(os.listdir(folder)):
            if fn.endswith('.ts'):
                n = process_file(os.path.join(folder, fn))
                sub_total += n
                total += n
                mark = '✅' if n else '⏭️ '
                print(f'  {mark} {fn}: {n} câu')
        print(f'  👉 Tổng mục này: {sub_total} câu\n')

    print(f'🎯 TỔNG CỘNG: {total} câu hỏi đã được xáo trộn vị trí đáp án.\n')

    # Thống kê phân bố sau khi xáo trộn
    dist = Counter()
    for folder, _ in targets:
        if not os.path.isdir(folder):
            continue
        for fn in sorted(os.listdir(folder)):
            if fn.endswith('.ts'):
                with open(os.path.join(folder, fn), 'r', encoding='utf-8') as f:
                    for m in re.finditer(r'\banswer:\s*(\d+)', f.read()):
                        dist[int(m.group(1))] += 1

    if dist:
        print('📊 Phân bố vị trí đáp án đúng sau xáo trộn trên toàn bộ hệ thống:')
        sum_all = sum(dist.values())
        for pos in sorted(dist):
            bar = '█' * (dist[pos] // 3)
            pct = dist[pos] * 100 / sum_all
            print(f'  Vị trí {pos} ({"ABCD"[pos]}): {dist[pos]:3d} câu ({pct:.1f}%)  {bar}')
        print()


if __name__ == '__main__':
    main()
