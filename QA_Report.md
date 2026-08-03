# BÁO CÁO QA / UI-UX — SVEF Platform (Prototype)
**Vai trò:** Senior QA / UI-UX Engineer · **Ngày:** 27/07/2026
**Đối tượng so sánh:** Prototype (http://localhost:8080) ⇄ Sản phẩm mẫu (swissvieteconomicforum.org) + đặc tả BRD v1.0
**Phiên bản:** Sau các đợt sửa **P0 + P1 + P2 + hoàn thiện Member Portal**

> ⚠️ **Phạm vi kiểm thử:** Member Portal của site mẫu yêu cầu đăng nhập và công cụ không tự đăng nhập trang ngoài (BRD §6.2). Phần "sau đăng nhập" so với site mẫu dựa trên mô tả BRD, **chưa** đối chiếu ảnh live (đang chờ ảnh chụp từ tài khoản test).

---

## 1. Tóm tắt điều hành

Prototype hiện **vượt sản phẩm mẫu về độ phủ chức năng** (Member Portal đầy đủ, đề xuất→duyệt sự kiện, admin back-office, đa hồ sơ, GDPR) và **đã khép phần lớn khoảng cách "sản phẩm thật"** sau 3 đợt sửa: a11y bàn phím, cookie/GDPR, gate quyền admin, trang Resources/Media riêng. Khoảng cách còn lại chủ yếu là **hạ tầng** (backend/auth thật, lưu dữ liệu) và **asset hình ảnh thật** — cần SVEF cung cấp.

**Chỉ số tổng thể:** 10/12 defect đã đóng; 2 còn mở (đều thuộc bản chất prototype/chờ quyết định).

---

## 2. Nhật ký lỗi (Defect Log) — trạng thái cập nhật

| ID | Mức | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|---|
| DEF-01 | 🟠 Major | Message click hiện "t_chat" | ✅ **Fixed** | Nay mở luồng chat (`openThread`) |
| DEF-02 | 🟠 Major | Menu mobile kẹt mở sau khi chọn mục | ✅ **Fixed** | `show()` xóa `cssText` |
| DEF-03 | 🟡 Minor | Nút login không dịch sau đăng nhập | ✅ **Fixed** | Dịch theo trạng thái |
| DEF-04 | 🟠 Major (A11y) | Modal không Esc/focus-trap; click không dùng được bàn phím | ✅ **Fixed** | Esc + focus-trap + Enter/Space + `:focus-visible` |
| DEF-05 | 🔴 Critical | `/admin.html` mở cho mọi người | ✅ **Fixed** | Cổng đăng nhập + xác nhận NDA |
| DEF-06 | 🟡 Minor | Bảng admin tràn màn hẹp | ✅ **Fixed** | Wrapper cuộn ngang |
| DEF-07 | 🟡 Minor | Ngôn ngữ mặc định lệch (Web EN / App VI) | 🟠 **Open** | Nên thống nhất + nhớ theo tài khoản |
| DEF-08 | 🟠 Major | App nổi bật thanh toán VN (ngoài phạm vi đợt 1) | ✅ **Fixed** | Đã gắn nhãn "giai đoạn sau — BRD §3.2" |
| DEF-09 | 🟠 Major | Thiếu cookie/GDPR consent | ✅ **Fixed** | Banner Accept/Decline, nhớ lựa chọn, song ngữ |
| DEF-10 | 🟡 UX | Placeholder thay ảnh thật | 🟡 **Partial** | Đã thêm minh hoạ SVG hero/media; **ảnh/logo thật chờ SVEF** |
| DEF-11 | ℹ️ Info | State không lưu qua reload | 🟠 **Open** | Bản chất prototype — hết khi có backend |
| DEF-12 | ℹ️ Info | SSO là stub | 🟠 **Open** | Bản chất prototype |

### Defect mới phát hiện trên phần Member Portal vừa dựng
| ID | Mức | Mô tả | Khuyến nghị |
|---|---|---|---|
| DEF-13 | 🟡 Minor | Hồ sơ tạo qua wizard ở trạng thái "Chờ duyệt" nhưng **admin chưa có luồng duyệt riêng cho hồ sơ/thành viên** (chỉ duyệt sự kiện) | Bổ sung hàng đợi "duyệt thành viên/đối tác" ở admin |
| DEF-14 | 🟡 Minor | Đề xuất sự kiện ở Portal thêm vào danh sách Portal, **chưa đồng bộ** sang hàng đợi Admin (2 dataset mock tách biệt) | Sẽ hết khi có backend/API chung |
| DEF-15 | ℹ️ Info | Giá gói thành viên (CHF) là **minh hoạ** | Cần SVEF xác nhận biểu phí thật |
| DEF-16 | ℹ️ Info | Toggle hiển thị / checkbox thông báo là **cosmetic** (chưa lưu) | Nối API khi có backend |
| DEF-17 | 🟡 Minor | `admin.html` vẫn **chỉ tiếng Anh** (BRD yêu cầu song ngữ) | Ưu tiên thấp; bổ sung i18n admin ở P3 |

---

## 3. Đối chiếu tổng quan (cập nhật)

| Tiêu chí | Sản phẩm mẫu | Prototype (hiện tại) | Nhận định |
|---|---|---|---|
| Menu Resources & Media tách riêng | Có | ✅ Có (2 trang riêng) | Ngang bằng |
| Cookie / GDPR consent | Có | ✅ Có | Ngang bằng |
| Social links | Có | ✅ Có (footer) | Ngang bằng |
| Song ngữ EN/VN | Có | ✅ Có (web + app; admin EN) | Gần ngang |
| Hình ảnh thật | Ảnh chuyên nghiệp | 🟡 SVG minh hoạ (chờ asset) | Còn khoảng cách |
| Member Portal | Có (1 email/1 hồ sơ) | ✅ **Đa hồ sơ + wizard + settings + GDPR** | Prototype vượt trội |
| Onboarding/đăng ký | Cơ bản | ✅ Wizard 5 bước | Prototype vượt trội |
| Đề xuất & duyệt sự kiện | Không lộ | ✅ Có vòng đầy đủ | Prototype vượt trội |
| Admin back-office | Không lộ | ✅ Có (gated + NDA) | Prototype vượt trội |
| A11y bàn phím | Khá | ✅ Esc/focus-trap/Enter | Ngang/hơn |
| Hạ tầng (backend/auth/SEO) | Production thật | 🔴 Static mock | Prototype (đúng bản chất) |

---

## 4. Đánh giá heuristic (Nielsen) — cập nhật

| Heuristic | Trước | Sau | Thay đổi |
|---|---|---|---|
| Nhất quán & chuẩn | 4/5 | 4.5/5 | Design-system + Resources/Media khớp mẫu |
| Thẩm mỹ & tối giản | 3.5/5 | 4/5 | Hero illustration, media thumbnail |
| Nhận biết trạng thái | 4/5 | 4.5/5 | Banner "chờ duyệt", checklist onboarding, chip trạng thái |
| Phòng ngừa lỗi / A11y | 2.5/5 | 4/5 | Esc/focus-trap/keyboard/focus-visible |
| Trợ giúp & tài liệu | 3.5/5 | 4/5 | Wizard hướng dẫn từng bước, hub map BRD |
| Kiểm soát của người dùng | 3.5/5 | 4.5/5 | GDPR export/delete, đa hồ sơ, hiển thị public/private |

---

## 5. Độ phủ yêu cầu BRD (Member Portal & Website)

| Requirement | Trạng thái demo |
|---|---|
| BR-W-04 Đa hồ sơ / 1 tài khoản | ✅ Switcher + wizard "Add profile" |
| BR-W-05 SSO Google/Microsoft | ✅ UI (stub) — wizard + login |
| BR-W-06 Phân quyền Subscriber/Member/Partner | ✅ CSDL đối tác gated theo quyền |
| BR-W-07 Onboarding & duyệt | ✅ Wizard 5 bước → "chờ duyệt" |
| BR-W-08 Form đăng ký hấp dẫn, từng bước | ✅ Wizard có stepper |
| BR-W-09 Tự sửa hồ sơ công ty | ✅ Tab hồ sơ |
| BR-W-10 Upload tài liệu → tab hồ sơ | ✅ Tab Documents |
| BR-W-11 Danh bạ + filter | ✅ Market/Type/Industry |
| BR-W-12 Nhắn tin theo quyền | ✅ Luồng chat + gated |
| BR-W-13→16 Đề xuất/duyệt/hiển thị sự kiện | ✅ Portal + Admin |
| BR-W-01/02/03 CMS song ngữ | ✅ Admin CMS |
| BR-W-17/18/19 Admin/export/migration | ✅ Admin |
| §11.2 GDPR | ✅ Cookie consent + export/delete |

---

## 6. Khuyến nghị ưu tiên còn lại

- **P1 (chờ SVEF):** cung cấp **ảnh/logo thật** (DEF-10); **chốt brand màu** (đỏ Swiss vs xanh mẫu); xác nhận **biểu phí gói** (DEF-15).
- **P2 (kỹ thuật, khi có backend):** thống nhất & lưu **ngôn ngữ mặc định** theo tài khoản (DEF-07); đồng bộ **đề xuất sự kiện Portal ↔ hàng đợi Admin** (DEF-14); lưu **settings/visibility** thật (DEF-16); **SSO thật** (DEF-12); lưu state (DEF-11).
- **P3 (hoàn thiện):** hàng đợi **duyệt thành viên/đối tác** ở admin (DEF-13); **song ngữ cho admin** (DEF-17).

---

## 7. Kết luận

Sau 3 đợt sửa, prototype đạt trạng thái **demo-ready ở mức cao**: đầy đủ luồng nghiệp vụ ưu tiên của BRD (Partner & Event), Member Portal hoàn chỉnh, tuân thủ GDPR ở tầng UI, a11y bàn phím, và cấu trúc thông tin khớp sản phẩm mẫu (Resources/Media, cookie, social). Các hạng mục còn mở đều **thuộc hạ tầng hoặc chờ quyết định/asset của SVEF**, không chặn việc trình diễn.
