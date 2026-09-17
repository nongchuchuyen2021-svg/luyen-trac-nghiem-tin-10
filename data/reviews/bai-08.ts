import type { LessonReview } from "@/lib/types";

const review: LessonReview = {
  summary:
    "Bài này giúp em phân biệt mạng LAN với Internet, hiểu vai trò của Internet trong cuộc sống, và làm quen với hai công nghệ dựa trên Internet: điện toán đám mây và kết nối vạn vật (IoT).",
  keyPoints: [
    "LAN có phạm vi nhỏ (gia đình, cơ quan), có chủ sở hữu; Internet là mạng diện rộng toàn cầu, không có chủ sở hữu duy nhất.",
    "Switch/Hub chỉ chuyển tiếp dữ liệu trong nội bộ LAN; Router kết nối các LAN với nhau qua Internet.",
    "Internet có vai trò lớn trong giao tiếp cộng đồng và giáo dục, ảnh hưởng sâu sắc tới cách làm việc, học tập của con người.",
    "Điện toán đám mây có 3 loại dịch vụ chính: SaaS (phần mềm, VD Google Docs), PaaS (nền tảng, VD bản đồ số Google), IaaS (hạ tầng, VD máy chủ ảo AWS).",
    "IoT là việc liên kết các thiết bị thông minh để tự động thu thập, trao đổi, xử lí dữ liệu — lợi ích: thu thập dữ liệu diện rộng, làm việc nơi bất lợi, hoạt động thời gian thực, tiết kiệm chi phí.",
  ],
  commonMistakes: [
    {
      mistake: "Nhầm rằng Switch và Router là một, đều chỉ đơn giản là 'thiết bị kết nối mạng'.",
      fix: "Switch/Hub CHỈ chuyển tiếp dữ liệu trong nội bộ LAN. Router mới là thiết bị gửi dữ liệu RA NGOÀI LAN, qua Internet, khi đích đến không nằm trong mạng cục bộ.",
    },
    {
      mistake: "Nghĩ rằng Dropbox, Google Drive là IaaS vì cũng 'lưu trữ' dữ liệu giống thuê máy chủ.",
      fix: "Dropbox/Google Drive chỉ là SaaS (phần mềm gửi/lưu tệp có sẵn, dùng ngay). IaaS là việc thuê hẳn một máy chủ ảo TRỐNG để TỰ cài hệ điều hành và phần mềm lên — mức độ can thiệp khác hẳn nhau.",
    },
    {
      mistake: "Nghĩ rằng IoT bắt buộc mọi thiết bị phải kết nối trực tiếp qua Internet.",
      fix: "IoT là hệ LIÊN MẠNG — các thiết bị có thể kết nối qua nhiều hạ tầng khác nhau (wifi cục bộ, bluetooth,…), không bắt buộc mọi kết nối đều trực tiếp qua Internet.",
    },
  ],
  tips: [
    "Mẹo nhớ SaaS/PaaS/IaaS theo mức độ 'tự làm': SaaS dùng ngay phần mềm có sẵn (ít tự làm nhất) → PaaS dùng nền tảng để tự xây app → IaaS thuê hạ tầng trống để tự làm mọi thứ (nhiều tự làm nhất).",
    "Mẹo phân biệt LAN/Internet: tự hỏi 'ai là chủ sở hữu, cai quản mạng này?' — trả lời rõ ràng được (gia đình, trường, công ty) thì là LAN; không ai sở hữu riêng thì là Internet.",
  ],
  flashcards: [
    {
      front: "LAN là viết tắt của gì?",
      back: "Local Area Network — mạng cục bộ, phạm vi nhỏ như gia đình, trường học, công ty.",
    },
    {
      front: "Thiết bị nào chỉ chuyển tiếp dữ liệu trong nội bộ LAN?",
      back: "Switch (bộ chuyển mạch) hoặc Hub (bộ chia).",
    },
    {
      front: "Thiết bị nào dùng để kết nối các LAN với Internet?",
      back: "Router (bộ định tuyến).",
    },
    {
      front: "Ai là chủ sở hữu của Internet?",
      back: "Không ai sở hữu riêng — chỉ có vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên.",
    },
    {
      front: "SaaS, PaaS, IaaS là viết tắt của gì?",
      back: "Software / Platform / Infrastructure as a Service — phần mềm / nền tảng / hạ tầng như dịch vụ.",
    },
    {
      front: "Google Docs là ví dụ của loại dịch vụ đám mây nào?",
      back: "SaaS — phần mềm như dịch vụ.",
    },
    {
      front: "IoT là gì?",
      back: "Internet of Things — kết nối vạn vật, liên kết các thiết bị thông minh để tự động thu thập, trao đổi, xử lí dữ liệu.",
    },
    {
      front: "Nêu 1 lợi ích của IoT khi giám sát lò phản ứng hạt nhân?",
      back: "Làm việc được ở những nơi con người không thể tới được.",
    },
  ],
  checklist: [
    "Tôi phân biệt được mạng LAN và Internet.",
    "Tôi phân biệt được vai trò của Switch/Hub và Router.",
    "Tôi phân biệt được 3 loại dịch vụ đám mây SaaS, PaaS, IaaS.",
    "Tôi giải thích được khái niệm IoT và nêu được lợi ích của nó.",
  ],
  diagram: "lan-qua-internet",
};

export default review;
