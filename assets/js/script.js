let hamburgerMenu = document.querySelector(".hamburger-menu");
let sidebar = document.querySelector(".sidebar");
let classList = sidebar.classList;
// let wall = document.querySelector(".wall");
// // tidak menggunakan dom traversal
// hamburgerMenu.addEventListener("click", function() {
//     wall.classList.toggle("wall-active");
//     sidebar.classList.toggle("nav-active");
// })

// menggunakan dom traversal atau penelusuran dom
hamburgerMenu.addEventListener("click", function(e) {
    // console.log(e.target.nextElementSibling.nextElementSibling.nextElementSibling);
    // e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("wall-active");
    // e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("wall-active");
    e.target.nextElementSibling.classList.toggle("nav-active");
    hamburgerMenu.classList.toggle("hamburger-menu-active");
})

// window.addEventListener("click", function (e) {
//     if (!hamburgerMenu.contains(e.target)) classList.remove("nav-active") && classList.remove("hamburger-menu");
//     // console.log(e.target.child.child);
// });

let menuLink = document.querySelector(".menu-link");

menuLink.addEventListener("click", function(e) {
    console.log(e.target.firstElementChild);
})

let images = [
    'bg1.jpg','bg2.jpeg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg','bg7.jpg','bg8.jpg','bg9.jpg','bg10.jpg','bg11.jpg','bg12.jpg','bg13.jpg','bg14.jpg','bg15.jpg','bg16.jpg','bg17.jpg','bg18.jpg','bg19.jpg'
]; // Ganti nama gambar sesuai dengan yang Anda miliki

let currentIndex = 0;

function changeImage() {
  document.body.style.backgroundImage = `url('/assets/img/bg/${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.transition = "2s";
}

changeImage(); // Pertama kali, panggil fungsi changeImage agar gambar berubah segera
setInterval(changeImage, 5000); // Ubah gambar setiap 5 detik (5000 milidetik)