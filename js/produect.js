function displayProducts(products) {
    let container = document.getElementById("products");

    if (!container) {
        console.error("products div not found");
        return;
    }

    container.innerHTML = "";

    products.forEach((item) => {
        // fake discount (because API doesn't give it)
        let oldPrice = Math.floor(item.price + item.price * 0.5);
        let discount = Math.floor(((oldPrice - item.price) / oldPrice) * 100);

        container.innerHTML += `
            <div class="card">

                <div class="rating">⭐ ${item.rating}</div>

                <img src="${item.thumbnail}" />

                <h2>${item.title}</h2>

                <div>
                    <span class="price">₹${item.price}</span>
                    <span class="old-price">₹${oldPrice}</span>
                </div>

                <div class="discount">${discount}% OFF</div>

                <div class="btn-group">
                    <button class="btn cart-btn"
                        onclick='addToCart(${JSON.stringify(item)})'>
                        Add to Cart
                    </button>

                   <button class="btn buy-btn"
                     onclick='buyNow(${JSON.stringify(item)})'>
                          Buy Now
                       </button>
                </div>

            </div>
        `;
    });
}

window.buyNow = function (product) {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    // store single product price as cartTotal
    localStorage.setItem("cartTotal", product.price);

    // optional flag (for future improvement)
    localStorage.setItem("buyNowMode", "true");

    // go to address page FIRST
    window.location.href = "address.html";
};

// import { isLoggedIn, getUser } from "./auth.js";

// function displayProducts(products) {

//     let container = document.getElementById("products");

//     if (!container) return;

//     container.innerHTML = "";

//     products.forEach((item) => {

//         let oldPrice = Math.floor(item.price + (item.price * 0.5));
//         let discount = Math.floor(((oldPrice - item.price) / oldPrice) * 100);

//         container.innerHTML += `
//             <div class="card">

//                 <div class="rating">⭐ ${item.rating}</div>

//                 <img src="${item.thumbnail}" />

//                 <h2>${item.title}</h2>

//                 <div>
//                     <span class="price">₹${item.price}</span>
//                     <span class="old-price">₹${oldPrice}</span>
//                 </div>

//                 <div class="discount">${discount}% OFF</div>

//                 <div class="btn-group">

//                     <button class="btn cart-btn"
//                         onclick='addToCart(${JSON.stringify(item)})'>
//                         Add to Cart
//                     </button>

//                     <button class="btn buy-btn"
//                         onclick='makePayment(${item.price})'>
//                         Buy Now
//                     </button>

//                 </div>

//             </div>
//         `;
//     });
// }
