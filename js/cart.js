// // function addToCart(product) {

// //     let cart = JSON.parse(localStorage.getItem("cart")) || [];

// //     cart.push(product);

// //     localStorage.setItem("cart", JSON.stringify(cart));

// //     alert("Added to Cart 🛒");
// // }






// function addToCart(product) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Added to Cart 🛒");
// }





// window.addToCart = function(product) {

//     let user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//         alert("Please login first");
//         window.location.href = "login.html";
//         return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     cart.push({
//         ...product,
//         userId: user.uid
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Added to Cart 🛒");
// };

















window.addToCart = function(product) {

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        ...product,
        userId: user.uid,
        id: Date.now() // IMPORTANT FIX
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart 🛒");
};