import type { LessonGame, Sort3Game, SortGame } from "@/lib/types";

// Game 1: Phân loại đặc điểm thuộc về "LAN" hay "Internet" — Bài 8, mục 1.
const sortGameLan: SortGame = {
  kind: "sort",
  id: "lan-hay-internet",
  title: "LAN hay Internet?",
  emoji: "🖧",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: mô tả đó là đặc điểm của mạng LAN (phạm vi nhỏ, có chủ sở hữu) hay của Internet (toàn cầu, không chủ sở hữu)?",
  matchLabel: "Internet",
  matchEmoji: "🌍",
  noMatchLabel: "LAN",
  noMatchEmoji: "🏠",
  items: [
    {
      id: "switch-hub",
      emoji: "🔌",
      label: "Switch/Hub chỉ chuyển tiếp dữ liệu trong nội bộ",
      isMatch: false,
      explain: "Đây là đặc điểm hoạt động của Switch/Hub — thiết bị chỉ chuyển tiếp dữ liệu trong phạm vi mạng LAN.",
    },
    {
      id: "phong-thuc-hanh",
      emoji: "🏫",
      label: "Mạng máy tính phòng thực hành Tin học của trường",
      isMatch: false,
      explain: "Phạm vi nhỏ (1 phòng/1 trường), có chủ sở hữu xác định (nhà trường) — đây là một mạng LAN.",
    },
    {
      id: "may-in-vanphong",
      emoji: "🖨️",
      label: "Hai máy in dùng chung trong văn phòng, nối qua Switch",
      isMatch: false,
      explain: "Kết nối trực tiếp trong nội bộ văn phòng qua thiết bị kết nối như Switch — đặc trưng của LAN.",
    },
    {
      id: "wifi-nha",
      emoji: "📶",
      label: "Mạng wifi trong nhà em",
      isMatch: false,
      explain: "Phạm vi gia đình, có chủ sở hữu (gia đình em) — đây là mạng LAN.",
    },
    {
      id: "noibo-nganhang",
      emoji: "🔒",
      label: "Mạng nội bộ ngân hàng, chỉ nhân viên trong toà nhà truy cập được",
      isMatch: false,
      explain: "Phạm vi giới hạn trong 1 tổ chức, có chủ sở hữu xác định — đặc trưng của LAN.",
    },
    {
      id: "hangty-may",
      emoji: "🌍",
      label: "Mạng kết nối hàng tỉ máy tính trên toàn thế giới",
      isMatch: true,
      explain: "Phạm vi toàn cầu — đúng là đặc điểm của Internet.",
    },
    {
      id: "khong-chu-so-huu",
      emoji: "🚫",
      label: "Không có ai là chủ sở hữu duy nhất",
      isMatch: true,
      explain: "Internet không của riêng ai, chỉ có vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên.",
    },
    {
      id: "router-gui-ra",
      emoji: "🔀",
      label: "Router gửi dữ liệu ra ngoài khi đích đến không nằm trong LAN",
      isMatch: true,
      explain: "Đây là nguyên lí hoạt động của Router — thiết bị kết nối các LAN với Internet.",
    },
    {
      id: "ket-noi-cac-lan",
      emoji: "🔗",
      label: "Kết nối các mạng LAN với nhau qua nhà cung cấp dịch vụ",
      isMatch: true,
      explain: "Đúng là cách Internet hình thành — liên kết nhiều LAN và máy đơn lẻ trên phạm vi toàn cầu.",
    },
    {
      id: "to-chuc-phi-loi-nhuan",
      emoji: "🏛️",
      label: "Được vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên",
      isMatch: true,
      explain: "Đặc điểm sở hữu của Internet — không một cá nhân/tổ chức nào sở hữu toàn bộ.",
    },
  ],
};

// Game 2: Phân loại "Dịch vụ đám mây hay không?" — Bài 8, mục 3.
const sortGameCloud: SortGame = {
  kind: "sort",
  id: "dam-may-hay-khong",
  title: "Dịch vụ đám mây hay không?",
  emoji: "☁️",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: đây có phải dịch vụ điện toán đám mây (thuê tài nguyên qua Internet, trả phí theo mức dùng) hay không?",
  matchLabel: "Là đám mây",
  matchEmoji: "☁️",
  noMatchLabel: "Không phải",
  noMatchEmoji: "💾",
  items: [
    {
      id: "google-docs",
      emoji: "📝",
      label: "Google Docs",
      isMatch: true,
      explain: "SaaS (phần mềm như dịch vụ) — soạn thảo văn bản ngay trên trình duyệt, không cần cài đặt.",
    },
    {
      id: "dropbox",
      emoji: "🗂️",
      label: "Dropbox / Google Drive",
      isMatch: true,
      explain: "Dịch vụ lưu trữ đám mây điển hình — gửi tệp lên máy chủ để truy cập từ mọi thiết bị.",
    },
    {
      id: "aws",
      emoji: "🖥️",
      label: "Thuê máy chủ ảo trên Amazon Web Services (AWS)",
      isMatch: true,
      explain: "IaaS (hạ tầng như dịch vụ) — thuê máy chủ ảo qua Internet để tự cài hệ điều hành, phần mềm lên đó.",
    },
    {
      id: "zoom-cloud",
      emoji: "🎥",
      label: "Phần mềm lớp học ảo Zoom",
      isMatch: true,
      explain: "SaaS — thuê bao phần mềm ứng dụng dùng qua Internet, không cần tự xây dựng.",
    },
    {
      id: "google-maps-paas",
      emoji: "🗺️",
      label: "Thuê bản đồ số Google để dựng app đặt xe",
      isMatch: true,
      explain: "PaaS (nền tảng như dịch vụ) — thuê nền tảng làm công cụ để tạo ra sản phẩm khác.",
    },
    {
      id: "cai-tu-dia-cd",
      emoji: "💿",
      label: "Cài Microsoft Word từ đĩa CD vào máy tính",
      isMatch: false,
      explain: "Cài đặt phần mềm truyền thống từ đĩa vật lí, không qua Internet, không thuê theo nhu cầu — không phải dịch vụ đám mây.",
    },
    {
      id: "luu-usb",
      emoji: "💾",
      label: "Lưu tệp vào USB rồi mang đi",
      isMatch: false,
      explain: "Lưu trữ vật lí cá nhân, không qua Internet, không phải thuê tài nguyên từ nhà cung cấp dịch vụ.",
    },
    {
      id: "tu-lap-may-tinh",
      emoji: "🔧",
      label: "Tự lắp ráp máy tính để bàn, tự cài hệ điều hành",
      isMatch: false,
      explain: "Tự sở hữu và cài đặt hoàn toàn trên phần cứng của mình, không thuê tài nguyên gì qua Internet.",
    },
    {
      id: "choi-game-offline",
      emoji: "🎮",
      label: "Chơi game offline, không cần mạng",
      isMatch: false,
      explain: "Không sử dụng tài nguyên mạng nào — hoàn toàn ngược lại với bản chất của điện toán đám mây.",
    },
    {
      id: "in-tai-nha",
      emoji: "🖨️",
      label: "In tài liệu bằng máy in tại nhà",
      isMatch: false,
      explain: "Thao tác với thiết bị vật lí tại chỗ, không phải dịch vụ thuê qua mạng.",
    },
  ],
};

// Game 3: Phân loại 3 nhóm dịch vụ đám mây — Bài 8, mục 3. Game 2 ở trên đã
// hỏi "có phải đám mây hay không", game này đi sâu hơn: đã LÀ đám mây rồi thì
// thuộc đúng loại hình nào trong 3 loại SaaS/PaaS/IaaS mà SGK nêu?
const sort3GameCloud: Sort3Game = {
  kind: "sort3",
  id: "saas-paas-iaas",
  title: "SaaS, PaaS hay IaaS?",
  emoji: "☁️",
  instructions:
    "Đọc tình huống thuê dịch vụ rồi chọn đúng loại hình điện toán đám mây: SaaS (phần mềm), PaaS (nền tảng) hay IaaS (hạ tầng)?",
  groups: [
    { emoji: "🧩", label: "SaaS" },
    { emoji: "🏗️", label: "PaaS" },
    { emoji: "🗄️", label: "IaaS" },
  ],
  items: [
    {
      id: "saas-docs",
      emoji: "📝",
      label: "Soạn thảo văn bản trực tiếp trên Google Docs, không cần cài phần mềm gì",
      group: 0,
      explain: "Dùng ngay phần mềm ứng dụng có sẵn qua trình duyệt — đúng là SaaS (Software as a Service).",
    },
    {
      id: "saas-zoom",
      emoji: "🎥",
      label: "Đăng kí thuê bao phần mềm lớp học ảo Zoom để dạy học trực tuyến",
      group: 0,
      explain: "Thuê phần mềm ứng dụng dùng ngay trong hoạt động nghiệp vụ (dạy học) — đúng là SaaS.",
    },
    {
      id: "saas-email",
      emoji: "📧",
      label: "Dùng tài khoản Gmail có sẵn để gửi, nhận thư điện tử",
      group: 0,
      explain: "Dùng ngay phần mềm thư điện tử được cung cấp sẵn, không cần tự dựng máy chủ mail — đúng là SaaS.",
    },
    {
      id: "paas-map",
      emoji: "🗺️",
      label: "Thuê bản đồ số của Google làm nền để dựng ứng dụng đặt xe công nghệ",
      group: 1,
      explain: "Thuê nền tảng làm công cụ để tạo ra một sản phẩm khác (ứng dụng đặt xe) — đúng là PaaS.",
    },
    {
      id: "paas-thanh-toan",
      emoji: "💳",
      label: "Thuê nền tảng cổng thanh toán trực tuyến để nhúng vào website bán hàng của mình",
      group: 1,
      explain: "Thuê nền tảng làm công cụ để xây nên một sản phẩm/dịch vụ khác của riêng mình — đúng là PaaS.",
    },
    {
      id: "paas-otp",
      emoji: "🔑",
      label: "Thuê nền tảng gửi tin nhắn OTP để tích hợp vào ứng dụng riêng của công ty",
      group: 1,
      explain: "Thuê nền tảng làm công cụ để phát triển tính năng cho sản phẩm riêng — đúng là PaaS.",
    },
    {
      id: "iaas-aws",
      emoji: "🖥️",
      label: "Thuê máy chủ ảo trên Amazon Web Services rồi tự cài hệ điều hành, phần mềm",
      group: 2,
      explain: "Thuê hạ tầng (máy chủ ảo) trống rồi tự cài mọi thứ lên trên — đúng là IaaS (Infrastructure as a Service).",
    },
    {
      id: "iaas-azure",
      emoji: "☁️",
      label: "Thuê máy chủ ảo trên Microsoft Azure để tự dựng website riêng từ đầu",
      group: 2,
      explain: "Chỉ thuê phần cứng ảo, còn lại tự cài đặt toàn bộ — đúng là IaaS.",
    },
    {
      id: "iaas-storage",
      emoji: "🗄️",
      label: "Thuê thiết bị lưu trữ thô qua Internet rồi tự cài phần mềm quản lí dữ liệu riêng lên đó",
      group: 2,
      explain:
        "Thuê hạ tầng lưu trữ trống rồi tự cài phần mềm lên đó — đúng là IaaS, khác với dịch vụ lưu trữ tệp thông thường như Dropbox (chỉ gửi tệp lên để truy cập, không được thuê hạ tầng trống để tự cài đặt).",
    },
  ],
};

const games: LessonGame[] = [sortGameLan, sortGameCloud, sort3GameCloud];

export default games;
