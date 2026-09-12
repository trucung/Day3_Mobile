# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
   
# 📚 BookStore Online App - Layout với Flexbox (React Native & Expo)

Ứng dụng mẫu **BookStore Online** được xây dựng bằng React Native và Expo Router, tập trung vào việc thiết kế giao diện (UI) và làm chủ các kỹ thuật sắp xếp layout với **Flexbox** (không sử dụng thư viện UI bên ngoài).

---

## 🎯 Mục tiêu dự án

* **Thành thạo Flexbox trong React Native**: Sử dụng thành thạo `flexDirection`, `justifyContent`, `alignItems`, `alignSelf`, `flexWrap`, `gap`[cite: 1].
* **Xây dựng layout thực tế**: Dựng các thành phần UI như Header cố định, danh sách danh mục dạng Chip, lưới sản phẩm 2 cột (Book Grid), Badge giảm giá/nhãn Mới, và Nút giỏ hàng nổi (Floating Button)[cite: 1].
* **Kỹ thuật Position & Containing Block**: Áp dụng `position: 'relative'` và `position: 'absolute'` lồng nhau để làm badge và floating action button[cite: 1].

---

## 🚀 Tính năng & Thành phần UI

* **Header**: Thanh điều hướng cố định phía trên màn hình (`flexDirection: 'row'`, `justifyContent: 'space-between'`)[cite: 1].
* **Category Chips**: Danh sách phân loại sách tự động xuống dòng khi tràn màn hình (`flexWrap: 'wrap'`, `gap: 8`)[cite: 1].
* **Book Grid**: Lưới hiển thị sách 2 cột sử dụng phần trăm chiều rộng (`width: '48%'`) và giữ tỉ lệ ảnh với `aspectRatio: 3/4`[cite: 1].
* **Discount Badge**: Nhãn giảm giá (`-20%`) hoặc nhãn `Mới` định vị tuyệt đối đè lên góc ảnh bìa sách[cite: 1].
* **Floating Cart Button**: Nút giỏ hàng hình tròn cố định ở góc dưới phải màn hình kèm badge hiển thị số lượng[cite: 1].

---

## 🛠 Công nghệ sử dụng

* **Framework**: React Native, Expo (Expo Router)
* **Language**: TypeScript
* **Styling**: `StyleSheet` (Flexbox thuần)

---

## 📂 Cấu trúc thư mục

```text
Day3_Mobile/
├── app/
│   └── index.tsx             # Entry point chính của ứng dụng (Trang chủ)
├── assets/                   # Hình ảnh & tài nguyên tĩnh
├── components/               # Các component giao diện reusable
│   ├── BookGrid.tsx          # Lưới sản phẩm 2 cột & Badge[cite: 1]
│   ├── BookRowCard.tsx       # Card sách dạng hàng ngang[cite: 1]
│   ├── CategoryChips.tsx     # Thẻ danh mục dạng pill[cite: 1]
│   ├── DiscountBadge.tsx     # Nhãn giảm giá / Mới[cite: 1]
│   ├── FloatingCartButton.tsx# Nút giỏ hàng nổi[cite: 1]
│   └── Header.tsx            # Thanh header ứng dụng[cite: 1]
├── App.tsx                   # Main App Component
├── data.ts                   # Dữ liệu mẫu (Books, Categories)[cite: 1]
├── package.json
└── README.md
