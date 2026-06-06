const user = JSON.parse(localStorage.getItem("user"));

const protectedPages = ["cart.html", "profile.html", "orders.html"];

if (protectedPages.some(page => window.location.pathname.includes(page))) {

    if (!user) {
        window.location.href = "login.html";
    }
}