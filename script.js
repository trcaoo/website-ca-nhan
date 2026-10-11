
const menu = document.getElementById("sidebar");
const openButton = document.getElementById("menuToggle");
const closeButton = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("show");
}

function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-link").forEach(function(link) {
    link.addEventListener("click", closeMenu);
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(function() {
                console.log("Service Worker đã đăng ký thành công");
            })
            .catch(function(error) {
                console.error("Lỗi đăng ký Service Worker:", error);
            });
    });
}