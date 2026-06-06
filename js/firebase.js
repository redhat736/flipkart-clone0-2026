import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCMzDhwN9Nn24n6bq6kPE0xBM_-29FErBc",
    authDomain: "flipkart-clone-2026.firebaseapp.com",
    projectId: "flipkart-clone-2026",
    storageBucket: "flipkart-clone-2026.firebasestorage.app",
    messagingSenderId: "917527167224",
    appId: "1:917527167224:web:5075af8820c139cc2dbb0d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();