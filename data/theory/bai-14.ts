import type { LessonTheory } from "@/lib/types";

// Bài 14. Làm việc với đối tượng đường và văn bản
// SGK trang 72–76, Chủ đề 4: Ứng dụng tin học
const theory: LessonTheory = {
  intro:
    "Hình chữ nhật, hình tròn, ngôi sao ở bài 13 chỉ vẽ được những khuôn dạng có sẵn — nhưng một dòng sông uốn lượn, một chiếc lá, một trái tim thì sao? Bài này mở khoá công cụ mạnh nhất của đồ hoạ vector: **đường (path)** vẽ được bất kì hình dạng nào, công cụ **Node** nắn từng điểm cho mềm mại tự nhiên, và **văn bản** — thứ tưởng chỉ để đọc — hoá ra cũng uốn lượn theo đường cong như một tác phẩm nghệ thuật.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "duong-bezier",
      emoji: "🖊️",
      heading: "Đường (Path) và công cụ Bezier",
      blocks: [
        {
          kind: "text",
          text: "Một **đường (path)** trong đồ hoạ vector được tạo từ các **điểm neo (anchor point)** nối với nhau — đoạn nối giữa hai điểm neo có thể là **đoạn thẳng** hoặc **đoạn cong Bezier**. Công cụ **Bezier** vẽ được cả hai: **nháy chuột** liên tiếp để đặt từng điểm tạo đường gấp khúc, hoặc **nháy rồi kéo rê** để kéo ra tay nắm điều khiển, tạo đoạn cong mượt mà theo ý muốn.",
        },
        {
          kind: "figure",
          diagram: "duong-va-diem-neo",
          caption: "Hình 14.1. Điểm neo Góc (Corner) tạo chỗ gãy — điểm neo Trơn (Smooth) cho đường cong liền mạch",
        },
        {
          kind: "compare",
          left: {
            title: "Điểm neo Góc (Corner)",
            emoji: "📐",
            items: [
              "Hai đoạn hai bên điểm neo **độc lập**, không cần thẳng hàng",
              "Tạo ra chỗ **gãy khúc, đỉnh nhọn** rõ rệt",
              "Phù hợp: đỉnh núi, mũi tên, cạnh sắc của ngôi sao",
            ],
          },
          right: {
            title: "Điểm neo Trơn (Smooth)",
            emoji: "🌊",
            items: [
              "Hai **tay nắm (handle)** ở hai bên luôn **thẳng hàng**",
              "Đường cong đi qua **liền mạch, mềm mại**, không gãy",
              "Phù hợp: sườn đồi, cánh hoa, đường cong tự nhiên",
            ],
          },
        },
        {
          kind: "example",
          title: "Tình huống: Vẽ dòng sông uốn lượn cho bản đồ trại hè",
          text: "Ban tổ chức trại hè nhờ bạn Diệp vẽ sơ đồ khu cắm trại có một dòng sông chảy quanh co qua các lán trại. Không hình khối cơ bản nào (chữ nhật, elip, sao) tạo được dáng sông ngoằn ngoèo tự nhiên. Diệp chọn công cụ Bezier: nháy-kéo liên tiếp dọc theo hình dạng dòng chảy, mỗi điểm nháy-kéo tạo ra một điểm neo trơn khiến các khúc sông uốn nối tiếp nhau mượt mà. Cuối cùng, Diệp nhấn **Enter** để kết thúc đường (vì sông là đường hở, không tô màu kín).",
        },
        {
          kind: "note",
          text: "Path gồm các điểm neo nối bằng đoạn thẳng hoặc đoạn cong; độ cong điều khiển bằng tay nắm. Kết thúc đường vẽ bằng phím Enter hoặc nháy đúp (đường hở); nháy vào điểm đầu để khép kín thành hình tô màu được. Điểm neo góc tạo chỗ gãy, điểm neo trơn cho đường cong liền mạch.",
        },
        {
          kind: "check",
          q: "Muốn vẽ một đoạn cong mượt bằng công cụ Bezier (thay vì đoạn thẳng gãy khúc), em thao tác thế nào?",
          options: [
            "Nháy chuột rồi kéo rê để kéo ra tay nắm điều khiển độ cong",
            "Nháy chuột một lần duy nhất rồi buông tay ngay lập tức",
            "Giữ phím Ctrl trong lúc nháy chuột đặt điểm neo",
            "Nháy đúp chuột liên tục thật nhanh vào cùng một vị trí",
          ],
          answer: 0,
          explain:
            "Nháy rồi kéo rê sẽ kéo ra tay nắm (handle) điều khiển hướng và độ cong của đoạn Bezier. Chỉ nháy một lần và buông tay tạo ra điểm neo góc, nối bằng đoạn thẳng.",
        },
        {
          kind: "check",
          q: "Sự khác biệt cơ bản giữa điểm neo Góc (Corner) và điểm neo Trơn (Smooth) là gì?",
          options: [
            "Điểm neo Trơn có hai tay nắm thẳng hàng nên đường cong liền mạch; điểm neo Góc cho phép hai đoạn gãy khúc độc lập",
            "Điểm neo Trơn chỉ dùng được cho đoạn thẳng, điểm neo Góc chỉ dùng cho đoạn cong",
            "Điểm neo Góc luôn nằm ở giữa đường, điểm neo Trơn luôn nằm ở hai đầu đường",
            "Hai loại điểm neo hoàn toàn giống nhau, chỉ khác tên gọi trong phần mềm",
          ],
          answer: 0,
          explain:
            "Tại nút Trơn, hai tay nắm thẳng hàng khiến đường cong đi qua mượt mà liên tục; tại nút Góc, hai đoạn hai bên độc lập nên tạo ra được chỗ gãy, đỉnh nhọn.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "cong-cu-node",
      emoji: "🍃",
      heading: "Công cụ Node: nắn chỉnh từng điểm neo",
      blocks: [
        {
          kind: "text",
          text: "Vẽ xong một đường chưa chắc đã ưng ý ngay — đây là lúc công cụ **Node** phát huy tác dụng: **kéo điểm neo** để đổi vị trí, **kéo tay nắm** để đổi độ cong, **thêm hoặc xoá nút** để chi tiết hoá hoặc đơn giản hoá hình dạng. Ngay cả những hình cơ bản (chữ nhật, elip) cũng có thể chuyển thành path bằng lệnh **Object to Path** để nắn tự do từng góc, thay vì chỉ chỉnh được qua vài tham số cố định.",
        },
        {
          kind: "figure",
          diagram: "cong-cu-node",
          caption: "Hình 14.2. Object to Path mở khoá từng điểm neo — công cụ Node nắn hình mềm mại",
        },
        {
          kind: "list",
          items: [
            "**Kéo điểm neo**: nháy giữ và kéo một nút để đổi vị trí điểm đó trên đường",
            "**Kéo tay nắm**: xuất hiện khi chọn một nút — kéo tay nắm để đổi hướng và độ cong của đoạn liền kề",
            "**Thêm nút**: nháy đúp lên đoạn đường tại vị trí muốn thêm điểm neo mới",
            "**Xoá nút**: chọn nút cần bỏ rồi nhấn phím Delete",
            "**Object to Path**: chuyển hình cơ bản (chữ nhật, elip, sao…) thành path để nắn tự do từng điểm",
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Từ khối lục giác thô cứng thành chiếc lá mềm mại",
          text: "Cho logo CLB Môi trường, bạn Việt vẽ tạm một khối đa giác 5 cạnh làm hình chiếc lá — nhưng nhìn thô cứng, cạnh nào cũng thẳng tưng như viên đá cắt góc. Việt chuyển sang công cụ Node: kéo tay nắm ở mỗi điểm neo để bo cong dần từng cạnh, kéo nhô một điểm ra làm cuống lá nhọn. Chỉ sau vài phút nắn chỉnh, khối đa giác cứng nhắc ban đầu đã biến thành một chiếc lá mềm mại, uyển chuyển như thật.",
        },
        {
          kind: "note",
          text: "Công cụ Node cho phép kéo điểm neo, bẻ tay nắm, thêm/xoá nút để chỉnh sửa tự do hình dạng của một path. Muốn nắn từng điểm của một hình cơ bản (vốn chỉ chỉnh được qua tham số như rộng/cao/bo góc), cần chuyển nó thành path bằng lệnh Object to Path trước.",
        },
        {
          kind: "check",
          q: "Muốn nắn tự do từng góc của một hình chữ nhật đã vẽ (thay vì chỉ chỉnh độ rộng, độ cao, độ bo góc), em cần làm gì trước tiên?",
          options: [
            "Chuyển hình chữ nhật thành path bằng lệnh Object to Path, sau đó dùng công cụ Node",
            "Xoá hình chữ nhật rồi vẽ lại bằng công cụ Bezier ngay từ đầu",
            "Nhóm (Group) hình chữ nhật với một hình khác rồi mới chỉnh được",
            "Tăng độ dày nét viền (stroke) của hình chữ nhật lên mức tối đa",
          ],
          answer: 0,
          explain:
            "Hình cơ bản chỉ có tham số giới hạn (rộng, cao, bo góc). Object to Path chuyển nó thành một path có điểm neo thật sự, từ đó công cụ Node mới kéo tự do được từng điểm.",
        },
        {
          kind: "check",
          q: "Trong ví dụ chiếc lá của bạn Việt, thao tác nào đã biến khối đa giác cứng nhắc thành hình mềm mại tự nhiên?",
          options: [
            "Dùng công cụ Node kéo tay nắm ở các điểm neo để bo cong từng cạnh",
            "Tô lại màu xanh đậm hơn cho khối đa giác ban đầu",
            "Phóng to khối đa giác lên gấp đôi kích thước ban đầu",
            "Xoay khối đa giác đi một góc 45 độ so với ban đầu",
          ],
          answer: 0,
          explain:
            "Màu sắc, kích thước hay góc xoay không làm thay đổi hình dạng đường viền. Chính việc kéo tay nắm bằng công cụ Node mới bo cong được các cạnh thẳng thành đường mềm mại.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "van-ban-va-text-on-path",
      emoji: "🔤",
      heading: "Làm việc với văn bản: Text và Text on Path",
      blocks: [
        {
          kind: "text",
          text: "Công cụ **Text** tạo đối tượng văn bản ngay trên trang vẽ: nháy chuột rồi gõ nội dung, sau đó chọn phông, cỡ, kiểu (đậm/nghiêng), màu tô/viền y như mọi đối tượng vector khác. Vì chữ vẫn là dữ liệu vector nên **phóng to bao nhiêu cũng không vỡ nét**. Ấn tượng hơn, tính năng **Text on Path** cho phép một dòng chữ **chạy uốn theo hình dạng của một đường** đã vẽ sẵn — biến chữ viết bình thường thành chi tiết trang trí đầy nghệ thuật.",
        },
        {
          kind: "figure",
          diagram: "text-on-path",
          caption: "Hình 14.3. Văn bản thông thường chạy thẳng — Text on Path uốn theo đường cong",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Gõ nội dung bằng công cụ Text",
              text: "Nháy công cụ Text lên canvas, gõ dòng chữ, chọn phông và cỡ chữ trên thanh thuộc tính.",
            },
            {
              label: "B2",
              title: "Vẽ một đường dẫn",
              text: "Dùng công cụ Bezier vẽ một đường cong (ví dụ hình vòng cung) tại vị trí muốn đặt chữ.",
            },
            {
              label: "B3",
              title: "Chọn cả chữ và đường",
              text: "Giữ Shift, nháy chọn cả đối tượng văn bản lẫn đường dẫn vừa vẽ.",
            },
            {
              label: "B4",
              title: "Áp lệnh Put on Path",
              text: "Vào menu Text ➜ Put on Path — dòng chữ lập tức uốn theo đúng hình dạng của đường đã chọn.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Bìa đặc san Xuân với khẩu hiệu uốn theo vầng mặt trời",
          text: "Thiết kế bìa đặc san Xuân, bạn Nga gõ tiêu đề lớn \"ĐẶC SAN MÙA XUÂN\" bằng công cụ Text, chọn phông đậm nổi bật giữa trang — phóng to gấp năm lần vẫn sắc nét vì là vector. Muốn thêm điểm nhấn, Nga vẽ một đường cong hình vòng cung phía trên tiêu đề (tượng trưng vầng mặt trời mọc), gõ dòng chữ phụ \"Chào xuân mới\", rồi chọn cả chữ lẫn đường cong, áp lệnh **Put on Path**. Ngay lập tức, dòng chữ phụ uốn cong duyên dáng ôm lấy tiêu đề như một vầng hào quang.",
        },
        {
          kind: "note",
          text: "Văn bản trong đồ hoạ vector là đối tượng đầy đủ: đổi phông, cỡ, màu, xoay, co giãn tự do mà không vỡ nét. Text on Path (lệnh Text → Put on Path) cần hai đối tượng — một văn bản và một đường dẫn — để đặt chữ chạy theo hình dạng đường đó. Sau khi áp dụng, vẫn sửa được nội dung chữ bình thường.",
        },
        {
          kind: "check",
          q: "Muốn áp dụng hiệu ứng Text on Path cho một dòng chữ, em cần chuẩn bị những gì trước khi vào lệnh Put on Path?",
          options: [
            "Một đối tượng văn bản và một đường dẫn (path) đã vẽ sẵn, rồi chọn cả hai cùng lúc",
            "Chỉ cần một đối tượng văn bản, phần mềm sẽ tự vẽ đường dẫn tương ứng",
            "Chỉ cần một đường dẫn, phần mềm sẽ tự sinh ra nội dung chữ ngẫu nhiên",
            "Nhóm (Group) dòng chữ với chính nó hai lần trước khi áp dụng lệnh",
          ],
          answer: 0,
          explain:
            "Text on Path cần đúng hai đối tượng: văn bản cần uốn cong và đường dẫn quy định hình dạng uốn — chọn cả hai rồi mới áp lệnh Text ➜ Put on Path.",
        },
        {
          kind: "check",
          q: "Vì sao khi phóng to tiêu đề \"ĐẶC SAN MÙA XUÂN\" lên gấp năm lần, dòng chữ vẫn sắc nét không hề vỡ?",
          options: [
            "Vì văn bản trong phần mềm vector là đối tượng vector, được vẽ lại bằng công thức ở mọi kích cỡ",
            "Vì phần mềm tự động chụp ảnh màn hình ở độ phân giải cao trước khi phóng to",
            "Vì cỡ chữ ban đầu Nga chọn đã rất lớn nên phóng to thêm không ảnh hưởng",
            "Vì dòng chữ đã được chuyển thành định dạng JPG trước khi đặt lên trang bìa",
          ],
          answer: 0,
          explain:
            "Giống mọi đối tượng vector khác, chữ được mô tả bằng công thức hình học chứ không phải lưới điểm ảnh cố định, nên phóng to ở bất kì tỉ lệ nào cũng được vẽ lại sắc nét.",
        },
      ],
    },
  ],

  summary: [
    "**Path** gồm các điểm neo nối bằng đoạn thẳng hoặc đoạn cong Bezier. Điểm neo **Góc** tạo chỗ gãy khúc; điểm neo **Trơn** (2 tay nắm thẳng hàng) cho đường cong liền mạch.",
    "Công cụ **Bezier**: nháy để đặt điểm, nháy-kéo để tạo đoạn cong; Enter/nháy đúp kết thúc đường hở, nháy về điểm đầu để khép kín.",
    "Công cụ **Node** kéo điểm neo và tay nắm để nắn hình tự do. **Object to Path** chuyển hình cơ bản thành path để mở khoá khả năng nắn từng điểm.",
    "**Text** tạo văn bản vector — phóng to không vỡ nét, đổi phông/cỡ/màu tự do. **Text on Path** (Text ➜ Put on Path) đặt chữ chạy uốn theo hình dạng của một đường đã chọn.",
  ],
};

export default theory;
