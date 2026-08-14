# SVEF Admin Back-office — bản build riêng

Back-office được tách khỏi website công khai và build thành một deliverable độc lập.

Lý do: feedback ngày 5–6/8/2026 — *"Website không để nút admin do họ không được phân quyền
admin. Những người được phân quyền admin sẽ có 1 đường link đăng nhập riêng."*

## Nội dung

```
admin/
  index.html   ← toàn bộ back-office, một file duy nhất
  README.md    ← file này
```

Không có file nào khác. `index.html` không tham chiếu ảnh, script hay stylesheet nội bộ
nào — phụ thuộc bên ngoài duy nhất là Google Fonts (Inter Tight + IBM Plex Mono).
Vì vậy thư mục này copy đi đâu cũng chạy được.

## Đường dẫn

| Môi trường | Địa chỉ |
|---|---|
| Demo hiện tại | `https://timothy-tt.github.io/SVEF/admin/` |
| Đề xuất khi lên production | subdomain riêng, ví dụ `https://admin.svef.org` |

Đường dẫn này **không được liên kết từ bất kỳ đâu trên website công khai**. Nhân sự được
phân quyền nhận link trực tiếp; website `swissvieteconomicforum.org` không có lối vào admin.

## Đăng nhập

- **Microsoft 365** (đường chính) — dùng tài khoản công việc `@svef.org` sẵn có. Vai trò
  và quyền truy cập lấy theo nhóm M365 của người đó, không phải quản lý mật khẩu admin riêng.
- **Email + mật khẩu SVEF** (đường dự phòng).
- Cả hai đường đều yêu cầu tick xác nhận NDA giữa SVEF và IMT (BRD §7.5 / §11.2).

Trong bản demo, mọi thông tin đăng nhập đều được chấp nhận.

## Cấu hình khi đổi host

Toàn bộ liên kết trỏ ra ngoài nằm gọn trong hằng số `LINKS` ở đầu thẻ `<script>`:

```js
const LINKS={
  site:"../website.html",   // → website SVEF công khai
  hub :"../index.html",     // → demo hub của IMT (bỏ khi lên production)
};
```

Sửa `site` thành URL thật của website, xoá `hub` (link nào không có trong `LINKS` sẽ tự
được gỡ khỏi giao diện). Ngoài hai dòng này không còn chỗ nào giả định admin nằm cạnh website.

## Phạm vi chức năng

Dashboard · CMS & Pages (soạn nội dung bằng HTML, kèm preview và SEO) · News/Media
(hai loại nội dung News và Media) · Partners (có quản lý tài liệu) · Memberships & roles ·
Event Management · Reports & Export.

Sự kiện gộp về một mục duy nhất (chốt ngày 14/8/2026). Trước đó tách làm hai theo
feedback ngày 7/8/2026, nay bỏ mục **SVEF App Event Management** riêng:

| Trong Event Management | Quản lý gì |
|---|---|
| Hàng đợi duyệt | Sự kiện do đối tác đề xuất, duyệt xong thì publish lên website. |
| Published events | Bản ghi sự kiện cho website công khai: thông tin cơ bản và link sang trang sự kiện. Tạo sự kiện tại đây, một lần duy nhất. |
| **App content** | Chỉ hiện với sự kiện do SVEF tổ chức (nút 📱 App content trên dòng sự kiện): thông tin sự kiện, agenda và session, diễn giả, nhà tài trợ, danh sách đăng ký, lịch hẹn 1-1 và push notification. Sự kiện của đối tác không lên app. |

Tạo một sự kiện với organiser là SVEF thì hệ thống tự tạo sẵn phần app content cho
sự kiện đó, đổi tên hoặc xoá thì phần app content đi theo.

Giao diện back-office chỉ có tiếng Anh. Nội dung website vẫn song ngữ EN/VI, chỉnh
bằng tab ngôn ngữ trong CMS & Pages và News/Media.
