// import { auth }
// from "./firebase.js";

// import {
// onAuthStateChanged,
// signOut
// }
// from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// const welcomeUser =
// document.getElementById(
// "welcomeUser"
// );

// const logoutBtn =
// document.getElementById(
// "logoutBtn"
// );

// onAuthStateChanged(
// auth,
// (user)=>{

// if(user){

// welcomeUser.innerHTML =
// `Hi, ${user.displayName}`;

// sessionStorage.setItem(
// "userName",
// user.displayName
// );

// sessionStorage.setItem(
// "userEmail",
// user.email
// );

// }else{

// welcomeUser.innerHTML =
// "Guest";

// }

// });

// logoutBtn?.addEventListener(
// "click",
// async ()=>{

// await signOut(auth);

// sessionStorage.clear();

// window.location.href =
// "login.html";

// });

// const logoutBtn =
// document.getElementById("logoutBtn");

// logoutBtn?.addEventListener("click",()=>{

//     sessionStorage.clear();

//     window.location.href =
//     "login.html";

// });


// //use for profile section

// const userName =
// sessionStorage.getItem("userName");

// const userArea =
// document.getElementById("userArea");

// if(userName){

//     userArea.innerHTML = `

//         <div class="profile-dropdown">

//             <button class="profile-btn">

//                 <i class="fa-solid fa-user"></i>

//                 Hi, ${userName}

//             </button>

//             <div class="dropdown-menu">

//                 <a href="profile.html">
//                     My Profile
//                 </a>

//                 <a href="orders.html">
//                     My Orders
//                 </a>

//                 <a href="#" id="logoutBtn">
//                     Logout
//                 </a>

//             </div>

//         </div>

//     `;

//     document
//     .getElementById("logoutBtn")
//     .addEventListener("click", function(){

//         sessionStorage.clear();

//         window.location.href =
//         "login.html";

//     });

// }



// function getUser() {

//     return JSON.parse(
//         sessionStorage.getItem("user")
//     );

// }

// function isLoggedIn() {

//     return getUser() !== null;

// }










import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const userArea = document.getElementById("userArea");
const welcomeUser = document.getElementById("welcomeUser");

// 🔥 MAIN AUTH LISTENER
onAuthStateChanged(auth, (user) => {

    if (user) {

        const userData = {
            uid: user.uid,
            name: user.displayName || "User",
            email: user.email
        };

        // ✔ localStorage (UI cache only)
        localStorage.setItem("user", JSON.stringify(userData));

        if (welcomeUser) {
            welcomeUser.innerHTML = `Hi, ${userData.name}`;
        }

        renderNavbar(userData);

    } else {

        localStorage.removeItem("user");

        if (welcomeUser) {
            welcomeUser.innerHTML = "Guest";
        }

        renderGuestNavbar();
    }
});


// 🔥 NAVBAR FOR LOGGED IN USER
function renderNavbar(user) {

    if (!userArea) return;

    userArea.innerHTML = `
        <div class="profile-dropdown">

            <button class="profile-btn">
                <i class="fa-solid fa-user"></i>
                Hi, ${user.name}
            </button>

            <div class="dropdown-menu">
                <a href="profile.html">My Profile</a>
                <a href="orders.html">My Orders</a>
                <a href="#" id="logoutBtn">Logout</a>
            </div>

        </div>
    `;

    document.getElementById("logoutBtn").addEventListener("click", async () => {

        await signOut(auth);

        localStorage.removeItem("user");

        window.location.href = "login.html";
    });
}


// 🔥 NAVBAR FOR GUEST
function renderGuestNavbar() {

    if (!userArea) return;

    userArea.innerHTML = `
        <a href="login.html">
            <i class="fa-solid fa-user"></i> Login
        </a>
    `;
}


// 🔥 HELPERS (optional use anywhere)
export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function isLoggedIn() {
    return getUser() !== null;
}