// import { auth, provider } from "./firebase.js";

// import {
//     signInWithEmailAndPassword,
//     signInWithPopup
// } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";


// document
//     .getElementById("loginBtn")
//     .addEventListener("click", async () => {

//         const email =
//             document.getElementById("login-email").value;

//         const password =
//             document.getElementById("login-password").value;

//         try {

//             const result =
//                 await signInWithEmailAndPassword(
//                     auth,
//                     email,
//                     password
//                 );

//             sessionStorage.setItem(
//                 "user",
//                 JSON.stringify({
//                     uid: result.user.uid,
//                     name: result.user.displayName,
//                     email: result.user.email
//                 })
//             );

//             alert("Login Successful");

//             window.location.href =
//                 "index.html";

//         }

//         catch (error) {

//             alert(error.message);
//         }

//     });


// document
//     .getElementById("googleLogin")
//     .addEventListener("click", async () => {

//         try {

//             const result =
//                 await signInWithPopup(
//                     auth,
//                     provider
//                 );

//             sessionStorage.setItem(
//                 "user",
//                 JSON.stringify({
//                     uid: result.user.uid,
//                     name: result.user.displayName,
//                     email: result.user.email
//                 })
//             );

//             window.location.href =
//                 "index.html";

//         }

//         catch (error) {

//             alert(error.message);
//         }

//     });













import { auth, provider } from "./firebase.js";
import {
    signInWithEmailAndPassword,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";


document.getElementById("loginBtn").addEventListener("click", async () => {

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {

        const result = await signInWithEmailAndPassword(auth, email, password);

        // 🔥 LOCALSTORAGE SAVE (IMPORTANT FIX)
        localStorage.setItem("user", JSON.stringify({
            uid: result.user.uid,
            name: result.user.displayName || "User",
            email: result.user.email
        }));

        alert("Login Successful");
        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});


// GOOGLE LOGIN
document.getElementById("googleLogin").addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        localStorage.setItem("user", JSON.stringify({
            uid: result.user.uid,
            name: result.user.displayName || "User",
            email: result.user.email
        }));

        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});


const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    window.location.href = "index.html";  //ager user login hai to yhe wapes login page ko open nhai kregha 
}