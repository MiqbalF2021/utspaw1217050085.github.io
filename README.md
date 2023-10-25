## Dokumentasi Landing Page:

### HTML

1. **Document Type Declaration (DOCTYPE)**: Ini mengindikasikan bahwa dokumen ini adalah dokumen HTML5.

2. **`<html>`**: Ini adalah elemen root dokumen HTML.

3. **`<head>`**: Bagian ini berisi informasi meta dan menghubungkan dokumen ke file CSS dan JavaScript eksternal.

   - **`<meta>`**: Mengatur karakter set dan tampilan skala halaman.
   - **`<link>`**: Menghubungkan ke file CSS eksternal.
   - **`<script>`**: Menghubungkan ke file JavaScript eksternal.
   - **`<link>`**: Menghubungkan ke Google Font untuk mengimpor font Quicksand.
   - **`<title>`**: Menentukan judul halaman.

4. **`<body>`**: Ini adalah elemen tubuh dokumen, dan semua konten yang terlihat pada halaman web ditempatkan di sini.

   - **Header Section**: Ini adalah bagian atas halaman yang berisi navigasi.

     - **`<header>`**: Header utama.
     - **`<nav>`**: Navigasi dengan logo dan daftar tautan.
     - **`<ul>`**: Daftar tautan navigasi.
     - **`<li>`**: Item dalam daftar tautan.
     - **`<a>`**: Tautan.

   - **Main Section**: Ini adalah area utama halaman dengan konten utama.

     - Konten 1: Informasi tentang teknologi.
     - Konten 2: Dua kartu yang menjelaskan fitur produk.
     - Konten 3: Gambar dan deskripsi produk.
     - Konten 4: Formulir kontak.
     - Konten 5: Formulir pilihan berlangganan.

   - **Footer Section**: Ini adalah bagian bawah halaman yang berisi tautan sosial media dan informasi tambahan.
     - **`<footer>`**: Footer utama.
     - **`.sosmed`**: Daftar ikon media sosial.
     - **`.about`**: Informasi tambahan.

### CSS

CSS digunakan untuk mengatur tampilan halaman HTML. Berikut adalah beberapa komponen yang ditentukan dalam CSS:

1. **Styling Body**: Menerapkan warna latar belakang dan font untuk seluruh halaman.

2. **Navbar Styling**: Mengatur tampilan navbar, termasuk latar belakang, ukuran logo, daftar tautan, dan efek hover.

3. **Styling untuk Konten 1, 2, 3, 4, 5**: Mengatur tampilan untuk semua bagian konten pada halaman web.

4. **Formulir Styling**: Mengatur tampilan elemen-elemen dalam formulir, seperti label, input teks, kotak pilihan, dan tombol submit.

5. **Footer Styling**: Mengatur tampilan bagian footer, termasuk warna latar belakang, susunan tautan sosial media, dan tautan tambahan.

### JavaScript

JavaScript digunakan untuk menambahkan interaksi ke halaman web. Berikut adalah penjelasan singkat untuk kode JavaScript yang diberikan:

1. **DOMContentLoaded Event**: Ini adalah event listener yang akan berjalan ketika seluruh halaman HTML telah dimuat.

2. **Form Validation**: Menangani pengiriman formulir dengan melakukan validasi, memastikan semua isian telah diisi. Jika formulir sudah terisi, maka akan muncul pesan sukses.

3. **Checkbox Form Submission**: Menangani pengiriman formulir kotak pilihan, memeriksa apakah minimal satu opsi telah dipilih. Jika opsi dipilih, maka akan muncul pesan yang mencantumkan pilihan yang dipilih.

Kode JavaScript ini memastikan bahwa formulir diisi dengan benar dan mengumpulkan data formulir dengan benar sebelum mengirimkannya. Itu juga mengatur respon saat kotak pilihan dikirim.
