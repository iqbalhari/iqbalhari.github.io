(function() {
    "use strict";
    // Menambahkan event listener untuk mendeteksi klik pada tautan
    document.querySelectorAll('nav .containernavitem .menu-link a').forEach(function(link) {
    link.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perpindahan halaman yang tidak diinginkan

    // Menghapus kelas 'active-link' dari semua tautan
    document.querySelectorAll('nav .containernavitem .menu-link a').forEach(function(item) {
    item.classList.remove('active-link');
    });

    // Menambahkan kelas 'active-link' ke tautan yang diklik
    link.classList.add('active-link');

    // Pindahkan ke halaman yang sesuai
    window.location.href = link.getAttribute('href');
    });
    });


    if (!window.contains(e.target)) window.remove("active");

})();