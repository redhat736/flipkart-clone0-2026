 

// document.addEventListener("DOMContentLoaded", () => {

//     const user = JSON.parse(sessionStorage.getItem("user"));

//     const loginLink = document.getElementById("loginLink");
//     const profileBox = document.getElementById("profileBox");
//     const userName = document.getElementById("userName");
//     const profileImg = document.querySelector(".profile-img");

//     if (!loginLink || !profileBox) return;

//     if (user) {

//         loginLink.classList.add("hidden");
//         profileBox.classList.remove("hidden");

//         // userName.innerText = user.name;

//         // First Letter Avatar
//         const firstLetter = user.name.charAt(0).toUpperCase();

//         profileImg.src =
//             `https://ui-avatars.com/api/?name=${firstLetter}&background=2874f0&color=fff&size=128`;

//     }

// });

// function logout() {
//     sessionStorage.removeItem("user");
//     window.location.href = "login.html";
// }









// document.addEventListener("DOMContentLoaded", () => {

//     const user = JSON.parse(localStorage.getItem("user"));

//     const loginLink = document.getElementById("loginLink");
//     const profileBox = document.getElementById("profileBox");
//     const profileImg = document.querySelector(".profile-img");

//     if (!loginLink || !profileBox) return;

//     if (user) {

//         loginLink.style.display = "none";
//         profileBox.classList.remove("hidden");

//         const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

//         profileImg.src =
//             `https://ui-avatars.com/api/?name=${firstLetter}&background=2874f0&color=fff&size=128`;
//     }
// });

// function logout() {
//     localStorage.removeItem("user"); // 🔥 IMPORTANT FIX
//     window.location.href = "login.html";
// }



document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const loginLink = document.getElementById("loginLink");
    const profileBox = document.getElementById("profileBox");
    const profileImg = document.querySelector(".profile-img");

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!loginLink || !profileBox) return;

    // ✅ MOBILE MENU TOGGLE FIX
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // USER LOGIN UI
    if (user) {

        loginLink.style.display = "none";
        profileBox.classList.remove("hidden");

        const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";

        profileImg.src =
            `https://ui-avatars.com/api/?name=${firstLetter}&background=2874f0&color=fff&size=128`;
    }
});