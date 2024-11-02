const investImages = document.querySelectorAll(".invest-img");

// Fungsi untuk menambahkan animasi zoom ketika kursor diarahkan
investImages.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transition = "transform 0.5s ease"; // Durasi dan jenis animasi
    img.style.transform = "scale(1.1)"; // Zoom-in
  });

  // Mengembalikan gambar ke ukuran awal saat kursor keluar
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)"; // Reset ke ukuran semula
  });
});

// Pilih semua elemen card
const cards = document.querySelectorAll('.card');

// Tambahkan event listener untuk setiap card
cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';
    card.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)'; // Mengangkat card dan zoom dengan rotasi
    card.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)'; // Tambahkan bayangan
    card.style.background = 'linear-gradient(135deg, #e2e2e2, #ffffff)'; // Gradien saat hover
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0) scale(1) rotate(0deg)'; // Kembali ke posisi awal
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Kembali ke bayangan awal
    card.style.background = '#ffffff'; // Kembali ke warna latar belakang default
  });
});

// navbar dropdown
document.addEventListener("DOMContentLoaded", function () {
  const btndropdown = document.getElementById("btn-dropdown");
  const dropdownmenu = document.getElementById("dropdown-menu");

  btndropdown.addEventListener("click", function () {
    dropdownmenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !btndropdown.contains(event.target) &&
      !dropdownmenu.contains(event.target)
    ) {
      dropdownmenu.classList.add("hidden");
    }
  });
});