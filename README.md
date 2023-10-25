# Dokumentasi Landing Page:

## HTML

Pada bagian HTML ini saya membuat 3 section terpisah yaitu **`<header>`**, **`<main>`** dan **`<footer>`**. Pada section **`<header>`** digunakan untuk navbar, sedangkan pada section **`<main>`** digunakan untuk konten utamanya yang dibagi lagi kedalam beberapa bagian dan pada bagian **`<footer>`** digunakan untuk informasi lainnya seperti sosial media.

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

## CSS

Fitur utama CSS yang saya gunakan pada landing page ini adalah Flexbox.
Flexbox ini sangat berguna untuk layouting dan sangan mudah cara penggunaannya.

Berikut Penjelasan Lengkapnya :

1. **Selektor Universal (\*):**

   - Menetapkan `padding` dan `margin` ke 0 untuk semua elemen HTML di halaman. Ini digunakan untuk menghilangkan padding dan margin bawaan dari beberapa elemen HTML, sehingga tampilan halaman menjadi lebih konsisten.

2. **Styling Body:**

   - Memberikan latar belakang dengan warna "bisque" pada elemen `<body>`.
   - Mengatur `font-family` ke 'Quicksand' atau font sans-serif untuk seluruh teks dalam elemen `<body>`. Font ini akan digunakan secara default oleh elemen-elemen dalam body.

3. **Styling Navbar:**

   - Memberikan elemen dengan kelas `.navbar` beberapa properti styling seperti `display: flex` untuk mengatur elemen-elemen anak secara horizontal.
   - Mengatur latar belakang dengan warna putih (`background-color: white`).
   - Mengatur `align-items` menjadi "center" untuk mengatur elemen anak secara vertikal tengah.
   - Memberikan `padding` sebesar 2 piksel.

4. **Styling Logo:**

   - Mengatur gambar dalam elemen dengan kelas `.logo` agar memiliki lebar maksimum 7%.

5. **Styling List:**

   - Mengatur elemen dengan kelas `.list` agar tampil sebagai elemen-flex dengan jarak antara elemen anak sebesar 70 piksel (`gap: 70px`).
   - Menambahkan `padding-right` sebesar 50 piksel untuk mengatur jarak dari tepi kanan.

6. **Styling Link di List:**

   - Mengatur tautan dalam elemen dengan kelas `.list` agar tidak memiliki gaya bawaan (list-style: none).
   - Menghilangkan dekorasi tautan dengan `text-decoration: none`.
   - Mengatur warna teks menjadi hitam (`color: black`).
   - Ketika tautan dihover (`:hover`), mengubah warna teks menjadi biru (`color: blue`).

7. **Styling Content 1, Content 2, Content 3, Content 4:**

   - Setiap bagian konten memiliki elemen dengan kelas `.content1`, `.content2`, `.content3`, dan `.content4`, yang masing-masing memiliki pengaturan khusus terkait tata letak dan paddingnya.
   - Gambar dalam elemen dengan kelas `.image` dan `.card1`, `.card2` diberi lebar maksimum 30%.
   - Judul (h1) dan paragraf (p) diatur ukuran fontnya.

8. **Styling Tombol "Buy" dan "See":**

   - Mengatur tombol dengan kelas `.buy` agar memiliki warna latar belakang tertentu, teks putih, dan border-radius (untuk sudut yang lebih lembut).
   - Ketika tombol dihover (`:hover`), mengubah warna latar belakang.

9. **Styling Content 5 (Checkbox):**

   - Memberikan padding sebesar 100 piksel pada elemen dengan kelas `.checkbox`.

10. **Styling Input dan Label:**

    - Menerapkan beberapa gaya pada elemen label dan input. Lebar input diberikan sebesar 500px.

11. **Styling Footer:**

    - Memberikan elemen footer dengan latar belakang berwarna tertentu.
    - Mengatur elemen footer agar tampil sebagai elemen-flex dengan arah kolom (`.flex-direction: column`).
    - Mengatur teks di footer menjadi rata tengah (`text-align: center`).
    - Memberikan padding bawah sebesar 40px.

12. **Styling Sosial Media Icons:**

    - Mengatur elemen dengan kelas `.sosmed` agar memiliki margin di sebelah kanan dan kiri sebesar 500px.
    - Mengatur gambar agar memiliki lebar maksimum 40% dari lebar parent.

13. **Styling Bagian "About" di Footer:**
    - Mengatur elemen dengan kelas `.about` agar memiliki jarak antara elemen anak sebesar 400px (`gap: 400px`).
    - Mengatur ukuran font dan warna teks pada elemen dengan kelas `.about`.
    - Ketika tautan dihover (`:hover`), mengubah warna teks.

## JavaScript

JavaScript digunakan untuk menambahkan interaksi ke halaman web. Berikut adalah penjelasan singkat untuk kode JavaScript yang diberikan:

1. **DOMContentLoaded Event**: Ini adalah event listener yang akan berjalan ketika seluruh halaman HTML telah dimuat.

2. **Form Validation**: Menangani pengiriman formulir dengan melakukan validasi, memastikan semua isian telah diisi. Jika formulir sudah terisi, maka akan muncul pesan sukses.

3. **Checkbox Form Submission**: Menangani pengiriman formulir kotak pilihan, memeriksa apakah minimal satu opsi telah dipilih. Jika opsi dipilih, maka akan muncul pesan yang mencantumkan pilihan yang dipilih.
