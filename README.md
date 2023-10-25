# Dokumentasi Landing Page:

## HTML

Pada bagian HTML ini saya membuat 3 section terpisah yaitu **`<header>`**, **`<main>`** dan **`<footer>`**. Pada section **`<header>`** digunakan untuk navbar, sedangkan pada section **`<main>`** digunakan untuk konten utamanya yang dibagi lagi kedalam beberapa bagian

### 1. **`<Header>`**: Pada section Ini saya gunakan untuk Navbar, Berikut beberapa tag yang saya gunakan pada section Header ini

- **`<nav>`**: sebagai pembungkus kedua pada keseluruhan elemen di navbar
     - **`<div>`**: saya menggunakan div sebagai pembungkus lagi yang digunakan untuk memisahkan gambar/logo dan list
     - **`<ul>`**: untuk membuat list
     - **`<li>`**: adalah tag list
     - **`<img>`**: untuk menambahkan image
     - **`<a>`**: sebagai tag yang didalamnya mengandung link yang menjurus ke halaman lain

Saya juga menggunakan atribut class ntuk memberikan satu atau lebih nilai identifikasi (class name) kepada elemen HTML. Ini digunakan untuk mengelompokkan elemen-elemen yang memiliki karakteristik atau gaya yang sama, sehingga saya dapat menerapkan gaya atau perilaku tertentu pada semua elemen dengan class yang sama.

### 2. **`<Main>`**: Pada section ini saya menyimpan semua konten yang ada

Semua konten pada landing page ini saya bagi lagi menjadi 5 section.

saya memberikan komentar pada source code html jadi anda dapat membedakan tiap section dengan mudah.

untuk tag yang saya gunakan tidak berbeda jauh dengan tag yang digunakan pada section header namun ada beberapa tag yang saya gunakan pada section ini dan tidak digunakan dalam section header diantaranya :

- **`<h1>`**: Ini adalah elemen judul terpenting dan digunakan untuk mengatur judul utama atau kepala dari halaman web.

- **`<h3>`**: Ini adalah elemen judul tingkat 3 dan digunakan untuk mengatur subjudul yang kurang penting daripada `<h1>` atau `<h2>`. `<h3>` digunakan untuk hierarki yang lebih rendah.

- **`<p>`**: Ini adalah elemen untuk paragraf teks. Ini digunakan untuk mengelompokkan teks ke dalam paragraf yang terpisah.

- **`<label>`**: Elemen `<label>` digunakan untuk membuat label yang berhubungan dengan elemen input seperti elemen `<input>`. Ini membantu dalam meningkatkan aksesibilitas dan memudahkan penggunaan formulir.

- **`<br>`**: Ini adalah elemen untuk perubahan baris, digunakan untuk memindahkan teks atau elemen ke baris berikutnya. Ini digunakan dalam konteks ketika Anda ingin membuat baris baru dalam teks tanpa membuat paragraf baru.

- **`<input>`**: Elemen `<input>` digunakan untuk membuat kontrol input dalam formulir seperti kotak teks, kotak centang, tombol radio, dan lainnya.

- **`<form>`**: Elemen `<form>` digunakan untuk membuat formulir HTML. Formulir menggabungkan elemen-elemen input seperti teks, kotak centang, dan tombol radio untuk mengumpulkan data dari pengguna.

- **`<select>`**: Elemen `<select>` digunakan untuk membuat kotak dropdown yang memungkinkan pengguna memilih salah satu dari beberapa opsi.

- **`<option>`**: Elemen `<option>` digunakan di dalam elemen `<select>` untuk mendefinisikan pilihan atau opsi yang akan ditampilkan dalam dropdown. Setiap elemen `<option>` memiliki atribut `value` yang akan dikirim ke server jika opsi tersebut dipilih.

### 3. **`<Footer>`**: pada section footer ini terdapat informasi contact, sosmed dan lainnya

pada bagian ini juga tidak beda jauh dengan section sebelumnya menggunakan tag yang sama.

### CSS

CSS digunakan untuk mengatur tampilan halaman HTML. Berikut adalah beberapa komponen yang ditentukan dalam CSS:

Fitur utama CSS yang saya gunakan pada landing page ini adalah Flexbox.
Flexbox ini sangat berguna untuk layouting dan sangan mudah car penggunaannya.

1. **Styling Body**: Menerapkan warna latar belakang dan font untuk seluruh halaman.

2. **Navbar Styling**: Mengatur tampilan navbar, termasuk latar belakang, ukuran logo, daftar tautan, dan efek hover.

3. **Styling untuk Konten 1, 2, 3, 4, 5**: Mengatur tampilan untuk semua bagian konten pada halaman web serta posisi layoutnya menggunakan Flexbox.

4. **Formulir Styling**: Mengatur tampilan elemen-elemen dalam formulir, seperti label, input teks, kotak pilihan, dan tombol submit.

5. **Footer Styling**: Mengatur tampilan bagian footer, termasuk warna latar belakang, susunan tautan sosial media, dan tautan tambahan.

### JavaScript

JavaScript digunakan untuk menambahkan interaksi ke halaman web. Berikut adalah penjelasan singkat untuk kode JavaScript yang diberikan:

1. **DOMContentLoaded Event**: Ini adalah event listener yang akan berjalan ketika seluruh halaman HTML telah dimuat.

2. **Form Validation**: Menangani pengiriman formulir dengan melakukan validasi, memastikan semua isian telah diisi. Jika formulir sudah terisi, maka akan muncul pesan sukses.

3. **Checkbox Form Submission**: Menangani pengiriman formulir kotak pilihan, memeriksa apakah minimal satu opsi telah dipilih. Jika opsi dipilih, maka akan muncul pesan yang mencantumkan pilihan yang dipilih.
