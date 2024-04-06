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
    'bg1.jpg','bg2.jpeg','bg4.jpg','bg5.jpg','bg9.jpg','bg12.jpg'
];

let currentIndex = 0;

function changeImage() {
  document.body.style.backgroundImage = `url('/assets/img/bg/${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.transition = "1.5s";
}

changeImage();
setInterval(changeImage, 5000);