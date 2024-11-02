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

// Buat observer untuk mengamati elemen yang masuk/keluar dari viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tambahkan kelas animasi ketika elemen masuk viewport
        entry.target.classList.add('animate-fade-up');
      } else {
        // Hapus kelas animasi ketika elemen keluar dari viewport
        entry.target.classList.remove('animate-fade-up');
      }
    });
  },
  { threshold: 0.1 } // threshold 0.1 berarti animasi akan aktif ketika 10% elemen terlihat
);

// Amati setiap elemen card
cards.forEach((card) => {
  observer.observe(card);
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