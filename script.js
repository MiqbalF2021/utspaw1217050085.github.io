document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen-elemen yang dibutuhkan dari formulir
    const form = document.querySelector(".input1 form");
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("Message");
    const selectRole = document.getElementById("tujuan");
    const checkboxForm = document.querySelector(".checkbox form");

    // Tambahkan event listener untuk menghandle pengiriman formulir
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        // Lakukan validasi formulir di sini (contoh: pastikan semua isian terisi)
        if (namaInput.value === "" || emailInput.value === "" || messageInput.value === "" || selectRole.value === "") {
            alert("Harap isi semua isian formulir.");
        } else {
            // Lakukan pengiriman data formulir (contoh: Anda dapat mengirim data ke server di sini)
            alert("Formulir berhasil dikirim!");
            form.reset(); // Reset formulir setelah pengiriman
        }
    });

    // Tambahkan event listener untuk menghandle pengiriman formulir checkbox
    checkboxForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const checkboxes = document.querySelectorAll(".checkbox input[type=checkbox]:checked");
        if (checkboxes.length === 0) {
            alert("Pilih setidaknya satu opsi.");
        } else {
            const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);
            alert("Anda memilih: " + selectedOptions.join(", "));
            checkboxForm.reset(); // Reset formulir checkbox setelah pengiriman
        }
    });
});
