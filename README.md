# Opodis Pharma Zalo Mini App

Zalo Mini App giới thiệu danh mục sản phẩm Opodis Pharma, được thực hiện cho bài test tuần 1 của thực tập sinh IT.

> Người thực hiện: **Phạm Trung Nghị**

## Chức năng

- Trang danh sách gồm 6 sản phẩm sử dụng mock data.
- Lọc sản phẩm theo danh mục.
- Trang chi tiết theo route `/product/:id`.
- Xử lý đường dẫn sản phẩm không tồn tại.
- Danh sách sản phẩm liên quan.
- Trang giới thiệu và thông tin liên hệ.
- Bottom navigation chuyển giữa Sản phẩm và Giới thiệu.

Ứng dụng không triển khai giỏ hàng, đặt hàng, thanh toán, đăng nhập, backend hoặc cơ sở dữ liệu.

## Công nghệ

- ZMP Framework
- React
- TypeScript
- ZaUI
- Tailwind CSS

## Cài đặt và chạy

Yêu cầu Node.js và Zalo Mini App Studio hoặc ZMP CLI.

```bash
npm install
npm start
```

Ứng dụng chạy mặc định tại `http://localhost:3000`.

## Build

Đăng nhập tài khoản Zalo có quyền Admin hoặc Developer của Mini App:

```bash
npm run login
npx zmp build
```

Có thể dùng Zalo Mini App Studio để chạy giả lập, deploy bản preview và tạo mã QR kiểm thử trên điện thoại.

## Cấu trúc chính

```text
src/
├── components/       Các component dùng chung
├── data/products.ts  Mock data của 6 sản phẩm
├── pages/            Danh sách, chi tiết và giới thiệu
├── static/           Logo, hero và ảnh sản phẩm cục bộ
└── types/product.ts  Kiểu dữ liệu Product
```

## Phạm vi dữ liệu

- Toàn bộ dữ liệu sản phẩm được khai báo tĩnh trong source code.
- Giá chỉ phục vụ mục đích minh họa cho bài test, không phải giá bán chính thức.
- Nội dung và hình ảnh sản phẩm được sử dụng cho bài test nội bộ; cần xác nhận quyền sử dụng trước khi phát hành công khai.

## Luồng demo đề xuất

1. Mở ứng dụng và xem danh sách sản phẩm.
2. Chọn một danh mục.
3. Mở một sản phẩm và xem thông tin chi tiết.
4. Chọn một sản phẩm liên quan hoặc quay lại danh sách.
5. Mở trang Giới thiệu từ bottom navigation.

## Mã nguồn

[GitHub repository](https://github.com/Nghipham9425/opodis-mini-app)
