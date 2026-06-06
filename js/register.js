// import { auth, provider } from "./firebase.js";

// import {
//     createUserWithEmailAndPassword,
//     updateProfile,
//     signInWithPopup
// } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";


// const registerBtn =
//     document.getElementById("registerBtn");

// registerBtn.addEventListener("click", async () => {

//     const name =
//         document.getElementById("name").value;

//     const email =
//         document.getElementById("email").value;

//     const password =
//         document.getElementById("password").value;

//     const confirmPassword =
//         document.getElementById("confirmPassword").value;

//     if (password !== confirmPassword) {
//         alert("Passwords do not match");
//         return;
//     }

//     try {

//         const userCredential =
//             await createUserWithEmailAndPassword(
//                 auth,
//                 email,
//                 password
//             );

//         await updateProfile(
//             userCredential.user,
//             {
//                 displayName: name
//             }
//         );

//         sessionStorage.setItem(
//             "user",
//             JSON.stringify({
//                 uid: userCredential.user.uid,
//                 name: name,
//                 email: email
//             })
//         );

//         alert("Registration Successful");

//         window.location.href =
//             "index.html";

//     }

//     catch (error) {

//         alert(error.message);
//     }

// });


// document
//     .getElementById("googleRegister")
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
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";


document.getElementById("registerBtn").addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {

        const userCredential =
            await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: name
        });

        // 🔥 LOCALSTORAGE SAVE
        localStorage.setItem("user", JSON.stringify({
            uid: userCredential.user.uid,
            name: name,
            email: email
        }));

        alert("Registration Successful");
        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});


// GOOGLE REGISTER
document.getElementById("googleRegister").addEventListener("click", async () => {

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