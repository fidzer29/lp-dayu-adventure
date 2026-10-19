# DAY’U ADVENTURE

Landing page dan katalog awal DAY’U ADVENTURE dibangun dengan Next.js App
Router, JavaScript, React, dan Tailwind CSS.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Struktur utama

```text
public/
  images/
    brand/
    hero/
    products/
src/
  app/
    layout.js
    page.js
    globals.css
  components/
    layout/
      BrandMark.js
      Footer.js
      Navbar.js
    products/
      ProductCard.js
      ProductDetailModal.js
    sections/
      BrandSection.js
      CollectionSection.js
      FeaturedProduct.js
      HeroSection.js
  data/
    products.js
```

Informasi katalog disimpan di `src/data/products.js`. Ganti gambar Unsplash
sementara dengan aset brand di `public/images/`, lalu ubah nilai `image` ke
path lokal seperti `/images/products/puffer-green.webp`. Tautan WhatsApp dan
marketplace di data produk masih kosong; isi dengan tautan toko resmi sebelum
menayangkan tombol pembelian. Ukuran S–XL pada data saat ini hanya contoh dan
perlu disesuaikan dengan ukuran yang benar-benar tersedia. Detail produk dibuka
dalam modal melalui kartu katalog; CTA pemesanan baru aktif saat tautan order
produk diisi.

## Pemeriksaan

```bash
npm run lint
npm run build
```
