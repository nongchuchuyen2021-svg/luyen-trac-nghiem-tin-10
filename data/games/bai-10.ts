import type { LessonGame, SearchGame, SortGame } from "@/lib/types";

// =====================================================================
// GAME 1: THỢ SĂN TÌM KIẾM GOOGLE (SEARCH OPERATOR BUILDER)
// =====================================================================
// Học sinh ghép các mảnh ghép cú pháp tìm kiếm nâng cao (Bài 10, mục 1):
// - "từ khoá": tìm chính xác cụm từ
// - site:tên_miền: tìm trong website/tổ chức cụ thể
// - filetype:đuôi_tệp: tìm đích danh loại tệp (.pdf, .pptx, .docx, .xlsx)
// - -từ_bỏ: loại trừ từ gây nhiễu
const searchGameGoogleMaster: SearchGame = {
  kind: "search",
  id: "tho-san-tim-kiem-google",
  title: "Thợ săn Tìm kiếm Google (Search Operator Builder)",
  emoji: "🔍",
  instructions:
    "Lắp ráp các mảnh toán tử nâng cao (site:, filetype:, \"\", -) vào thanh tìm kiếm Google để săn đúng tài liệu và bài giảng chuẩn xác!",
  challenges: [
    {
      id: "search-1",
      title: "Thử thách 1: Tìm bài thuyết trình PowerPoint",
      scenario:
        "Em cần làm bài thuyết trình môn Tin học về an toàn mạng. Hãy tìm các tệp bài giảng PowerPoint có sẵn (.pptx) có cụm từ chính xác: an toàn trên không gian mạng.",
      targetSnippet: "Tìm tệp .pptx chứa đúng cụm từ: an toàn trên không gian mạng",
      correctTokens: ['"an toàn trên không gian mạng"', "filetype:pptx"],
      distractorTokens: ["format:pptx", "type:ppt", "an toan mang", "file:powerpoint"],
      simulatedResult: {
        url: "https://violet.vn/baigiang/an-toan-tren-khong-gian-mang",
        breadcrumb: "violet.vn › baigiang › tin-hoc-10",
        title: "Bài giảng Tin học 10: An toàn trên không gian mạng",
        snippet:
          "Tệp trình chiếu PowerPoint hoàn chỉnh bao gồm 5 nguy cơ không gian mạng, các chủng loại mã độc và biện pháp phòng chống...",
        fileBadge: "PPTX",
      },
      explain:
        'Toán tử `filetype:pptx` chỉ định rõ máy tìm kiếm chỉ trả về tệp PowerPoint. Cụm từ đặt trong ngoặc kép `""` đảm bảo tìm chính xác nguyên cả cụm từ theo đúng thứ tự.',
    },
    {
      id: "search-2",
      title: "Thử thách 2: Tra cứu tư liệu lịch sử chính thống",
      scenario:
        "Cần tìm tư liệu chuẩn xác về Chiến dịch Điện Biên Phủ chỉ từ cổng thông tin của Bảo tàng Lịch sử Quốc gia (baotanglichsu.vn).",
      targetSnippet: "Tìm chính xác cụm: Chiến dịch Điện Biên Phủ trên trang: baotanglichsu.vn",
      correctTokens: ['"Chiến dịch Điện Biên Phủ"', "site:baotanglichsu.vn"],
      distractorTokens: ["web:baotanglichsu.vn", "domain:baotanglichsu", "dien bien phu", "page:baotanglichsu.vn"],
      simulatedResult: {
        url: "https://baotanglichsu.vn/vi/Articles/3096/chien-dich-dien-bien-phu-1954",
        breadcrumb: "baotanglichsu.vn › Articles › tu-lieu-lich-su",
        title: "Tư liệu lịch sử: Chiến dịch Điện Biên Phủ (1954) - Bảo tàng Lịch sử Quốc gia",
        snippet:
          "Toàn văn diễn biến 56 ngày đêm khoét núi ngủ hầm, đánh chắc tiến chắc làm nên chiến thắng Điện Biên Phủ lừng lẫy năm châu...",
      },
      explain:
        'Toán tử `site:baotanglichsu.vn` giới hạn phạm vi tìm kiếm duy nhất trong tên miền baotanglichsu.vn, loại bỏ hoàn toàn các trang du lịch, bán vé máy bay.',
    },
    {
      id: "search-3",
      title: "Thử thách 3: Tìm văn bản hướng dẫn của Bộ Giáo dục",
      scenario:
        "Tìm văn bản hướng dẫn dạng tài liệu Word (.docx) về cuộc thi Khoa học kĩ thuật học sinh trung học trên website của Bộ GD&ĐT (moet.gov.vn).",
      targetSnippet: "Tìm văn bản .docx có cụm từ: Khoa học kĩ thuật học sinh trên website: moet.gov.vn",
      correctTokens: ['"Khoa học kĩ thuật học sinh"', "site:moet.gov.vn", "filetype:docx"],
      distractorTokens: ["format:doc", "web:moet.gov.vn", "type:word", "not:lop9"],
      simulatedResult: {
        url: "https://moet.gov.vn/van-ban/khoa-hoc-ki-thuat-hoc-sinh-trung-hoc.docx",
        breadcrumb: "moet.gov.vn › van-ban › huong-dan",
        title: "Văn bản hướng dẫn Cuộc thi Khoa học kĩ thuật học sinh trung học - Bộ GD&ĐT",
        snippet:
          "Kế hoạch triển khai cuộc thi nghiên cứu KHKT cấp quốc gia, quy định về thể lệ, biểu mẫu hồ sơ đề tài và tiêu chí chấm điểm...",
        fileBadge: "DOCX",
      },
      explain:
        'Kết hợp đồng thời 3 toán tử: `site:moet.gov.vn` (nguồn chính thống), `filetype:docx` (đúng tệp Word để tải về soạn thảo), và `""` (đúng chủ đề).',
    },
    {
      id: "search-4",
      title: "Thử thách 4: Tìm tài liệu Python loại trừ bản cũ",
      scenario:
        "Em cần tìm giáo trình Tin học 10 về lập trình Python (.pdf) nhưng muốn LOẠI TRỪ hoàn toàn các tài liệu nói về phiên bản cũ Python 2.",
      targetSnippet: "Tìm tệp .pdf về 'Tin học 10' và 'Python', loại trừ: python2",
      correctTokens: ['"Tin học 10"', "python", "filetype:pdf", "-python2"],
      distractorTokens: ["not:python2", "without:python2", "format:pdf", "type:pdf"],
      simulatedResult: {
        url: "https://giaoduc.edu.vn/tai-lieu/tin-hoc-10-python-3.pdf",
        breadcrumb: "giaoduc.edu.vn › tai-lieu › tin-hoc-10",
        title: "Tài liệu học tập Lập trình Python hiện đại - Tin học 10 Kết nối tri thức",
        snippet:
          "Giáo trình lập trình Python 3 chuẩn GDPT 2018 dành cho học sinh lớp 10, các kiểu dữ liệu cơ bản, vòng lặp, hàm và cấu trúc rẽ nhánh...",
        fileBadge: "PDF",
      },
      explain:
        'Toán tử dấu trừ `-` đặt sát trước từ cần loại bỏ (`-python2` không có dấu cách giữa dấu trừ và từ) giúp lọc bỏ mọi trang web chứa phiên bản cũ không phù hợp.',
    },
    {
      id: "search-5",
      title: "Thử thách 5: Tìm bảng tính mẫu Excel tính điểm",
      scenario:
        "Tìm tệp bảng tính Excel mẫu (.xlsx) dùng để quản lí điểm học sinh nhưng loại trừ các bài viết chứa từ 'demo' không đầy đủ.",
      targetSnippet: "Tìm tệp .xlsx có cụm: quản lí điểm học sinh, loại trừ từ: demo",
      correctTokens: ['"quản lí điểm học sinh"', "filetype:xlsx", "-demo"],
      distractorTokens: ["format:excel", "type:xls", "not:demo", "file:table"],
      simulatedResult: {
        url: "https://thpt-nari.edu.vn/bieu-mau/bang-tinh-quan-li-diem.xlsx",
        breadcrumb: "thpt-nari.edu.vn › bieu-mau › so-diem",
        title: "Bảng tính mẫu quản lí điểm học sinh THPT chuẩn theo thông tư 22",
        snippet:
          "Mẫu sổ theo dõi kết quả học tập tự động tính điểm trung bình môn, xếp loại học lực và hạnh kiểm của học sinh...",
        fileBadge: "XLSX",
      },
      explain:
        'Dùng `filetype:xlsx` để lấy tệp bảng tính Excel, ngoặc kép `""` để định vị chính xác chức năng, và `-demo` để tránh các mẫu dùng thử sơ sài.',
    },
    {
      id: "search-6",
      title: "Thử thách 6: Tìm đề thi PDF trên cổng Sở Giáo dục",
      scenario:
        "Tìm đề thi tuyển sinh vào lớp 10 môn Tin học dạng tệp PDF trên cổng thông tin của Sở Giáo dục và Đào tạo Hà Nội (hanoi.edu.vn), loại bỏ các từ 'quảng cáo'.",
      targetSnippet: "Tìm đề thi tuyển sinh lớp 10 (.pdf) trên site: hanoi.edu.vn, loại trừ: quangcao",
      correctTokens: ['"tuyển sinh lớp 10"', "site:hanoi.edu.vn", "filetype:pdf", "-quangcao"],
      distractorTokens: ["web:hanoi.edu.vn", "type:pdf", "not:quangcao", "format:pdf"],
      simulatedResult: {
        url: "https://hanoi.edu.vn/khao-thi/de-thi-tuyen-sinh-lop-10.pdf",
        breadcrumb: "hanoi.edu.vn › khao-thi › de-thi",
        title: "Đề thi và đáp án chính thức Kỳ thi tuyển sinh vào lớp 10 - Sở GD&ĐT Hà Nội",
        snippet:
          "Công bố đề thi chính thức kèm đáp án và hướng dẫn chấm điểm chi tiết kỳ thi tuyển sinh vào lớp 10 THPT công lập...",
        fileBadge: "PDF",
      },
      explain:
        'Cú pháp `site:hanoi.edu.vn filetype:pdf "tuyển sinh lớp 10" -quangcao` là tổ hợp hoàn hảo giúp học sinh tìm tài liệu chính thống mà không bị quấy rầy bởi web rác.',
    },
    {
      id: "search-7",
      title: "Thử thách 7: Săn học liệu trên cổng igiaoduc.vn",
      scenario:
        "Tìm các bài giảng điện tử chính thức về môn Tin học lớp 10 trên Cổng học liệu số quốc gia igiaoduc.vn của Bộ Giáo dục & Đào tạo.",
      targetSnippet: "Tìm nội dung có cụm 'Tin học 10' trực tiếp trên cổng: igiaoduc.vn",
      correctTokens: ['"Tin học 10"', "site:igiaoduc.vn"],
      distractorTokens: ["domain:igiaoduc.vn", "web:igiaoduc", "tin hoc 10", "page:moet"],
      simulatedResult: {
        url: "https://igiaoduc.vn/bai-giang/tin-hoc-10-ket-noi-tri-thuc",
        breadcrumb: "igiaoduc.vn › cap-thpt › lop-10 › tin-hoc",
        title: "Kho học liệu số: Môn Tin học 10 - Cổng học liệu igiaoduc.vn",
        snippet:
          "Hệ thống bài giảng điện tử e-Learning, sách giáo khoa số hoá tương tác và video bài giảng đạt giải quốc gia môn Tin học lớp 10...",
      },
      explain:
        'Kho học liệu mở igiaoduc.vn do Bộ GD&ĐT phối hợp Đề án Hệ tri thức Việt số hoá xây dựng, là địa chỉ tin cậy hàng đầu cho giáo viên và học sinh.',
    },
    {
      id: "search-8",
      title: "Thử thách 8: Tìm tài liệu nghiên cứu AI chuyên sâu",
      scenario:
        "Tìm các bài báo khoa học định dạng PDF chứa chính xác thuật ngữ 'mạng nơ-ron nhân tạo' nhưng loại trừ các bài viết có từ 'khóa_học'.",
      targetSnippet: "Tìm tệp .pdf chứa 'mạng nơ-ron nhân tạo', loại trừ: khoa_hoc",
      correctTokens: ['"mạng nơ-ron nhân tạo"', "filetype:pdf", "-khoa_hoc"],
      distractorTokens: ["not:khoa_hoc", "format:pdf", "mang no ron", "type:document"],
      simulatedResult: {
        url: "https://vjst.vn/bai-bao/nghien-cuu-mang-no-ron-nhan-tao.pdf",
        breadcrumb: "vjst.vn › tap-chi-khoa-hoc › cong-nghe-thong-tin",
        title: "Nghiên cứu ứng dụng mạng nơ-ron nhân tạo trong xử lí ngôn ngữ tự nhiên",
        snippet:
          "Tạp chí Khoa học và Công nghệ Việt Nam: Phân tích kiến trúc học sâu Deep Learning và mô hình Transformer...",
        fileBadge: "PDF",
      },
      explain:
        'Toán tử `filetype:pdf` kết hợp cụm từ chính xác và trừ từ tiếp thị khóa học giúp em tiếp cận ngay các công trình khoa học nghiêm túc!',
    },
  ],
};

// =====================================================================
// GAME 2: PHÂN LOẠI CÔNG CỤ & TÍNH NĂNG (GOOGLE TRANSLATE VS IGIAODUC.VN)
// =====================================================================
const sortGameInternetResources: SortGame = {
  kind: "sort",
  id: "phan-loai-tai-nguyen-internet",
  title: "Google Translate hay igiaoduc.vn?",
  emoji: "🌐",
  instructions:
    "Kéo (hoặc bấm nút) từng tính năng/nhiệm vụ sang đúng công cụ: Cổng dịch thuật đa ngữ Google Translate hay Cổng học liệu số quốc gia igiaoduc.vn?",
  matchLabel: "igiaoduc.vn",
  matchEmoji: "📚",
  noMatchLabel: "Google Translate",
  noMatchEmoji: "🌐",
  items: [
    {
      id: "dich-am-thanh-loa",
      emoji: "🔊",
      label: "Bấm biểu tượng loa nghe máy phát âm chậm lại ở lần nháy thứ 2",
      isMatch: false,
      explain: "Google Translate cho phép bấm loa lần 1 nghe tốc độ thường, lần 2 nghe chậm từng từ.",
    },
    {
      id: "tai-sgk-dien-tu",
      emoji: "📖",
      label: "Xem và tải sách giáo khoa điện tử cùng sách giáo viên chính thức",
      isMatch: true,
      explain: "Cổng igiaoduc.vn lưu trữ đầy đủ sách giáo khoa và học liệu chuẩn của Bộ Giáo dục & Đào tạo.",
    },
    {
      id: "dich-nguyen-file",
      emoji: "📄",
      label: "Tải tệp Word (.docx), Excel (.xlsx) lên để dịch mà giữ nguyên bảng biểu",
      isMatch: false,
      explain: "Tính năng thẻ 'Tài liệu' của Google Translate cho phép dịch nguyên vẹn cả tệp văn bản/bảng tính.",
    },
    {
      id: "bai-giang-elearning",
      emoji: "🎓",
      label: "Xem kho bài giảng e-Learning đạt giải Cuộc thi Quốc gia",
      isMatch: true,
      explain: "igiaoduc.vn là nơi tập hợp hàng chục nghìn bài giảng e-Learning xuất sắc do các thầy cô toàn quốc đóng góp.",
    },
    {
      id: "dao-chieu-dich",
      emoji: "⇆",
      label: "Bấm nút mũi tên 2 chiều để hoán đổi ngôn ngữ nguồn và ngôn ngữ đích",
      isMatch: false,
      explain: "Tính năng đảo chiều dịch thuật (⇆) của Google Translate giúp đối chiếu câu dịch có tự nhiên không.",
    },
    {
      id: "o-e-r-mo",
      emoji: "🔓",
      label: "Khai thác tài nguyên giáo dục mở (OER) hoàn toàn miễn phí và hợp pháp",
      isMatch: true,
      explain: "igiaoduc.vn là cổng học liệu mở OER tiêu biểu của Việt Nam theo sáng kiến Giáo dục Mở toàn cầu.",
    },
    {
      id: "nhap-giong-noi-mic",
      emoji: "🎙️",
      label: "Bấm vào Micro để máy tự nhận diện tiếng nói và chuyển thành văn bản dịch",
      isMatch: false,
      explain: "Google Translate hỗ trợ nhập dữ liệu đa phương thức bằng giọng nói qua micro.",
    },
    {
      id: "tim-kiem-theo-lop-mon",
      emoji: "🏷️",
      label: "Lọc tài liệu theo danh mục: Cấp THPT ➜ Lớp 10 ➜ Môn Tin học",
      isMatch: true,
      explain: "Cổng igiaoduc.vn có cây danh mục đa cấp phân chia rõ ràng theo cấp học, khối lớp và môn học.",
    },
  ],
};

const bai10Games: LessonGame[] = [searchGameGoogleMaster, sortGameInternetResources];

export default bai10Games;
