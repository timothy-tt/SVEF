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

Dashboard · CMS & Pages (kèm SEO) · News/Media theo loại nội dung · Partners (có quản lý
tài liệu) · Memberships & roles · Event Management (template tạo event, quản lý session,
duyệt sự kiện đối tác) · Reports & Export.

Song ngữ EN/VI, chuyển bằng nút 🌐 trên thanh trên cùng.
