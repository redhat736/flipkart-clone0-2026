      document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    /* =========================
       HERO SLIDER
    ========================= */

    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);

    showSlide(currentSlide);

    /* =========================
       SMOOTH SCROLL (UI TOUCH)
    ========================= */

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       STICKY NAV EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky-active");
        } else {
            navbar.classList.remove("sticky-active");
        }
    });

});


 