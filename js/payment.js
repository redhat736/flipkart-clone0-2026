// function makePayment(price) {

//     var options = {

//         key: "rzp_test_SteGLT5AXsxzFs",

//         amount: price * 100,
//         currency: "INR",

//         name: "Flipkart Clone",

//         description: "Purchase Product",

//         image: "https://cdn-icons-png.flaticon.com/512/732/732084.png",

//         handler: function (response) {
//             alert("Payment Successful 🎉\nID: " + response.razorpay_payment_id);
//         },

//         theme: {
//             color: "#2874f0"
//         }
//     };

//     var pay = new Razorpay(options);
//     pay.open();
// }




function makePayment(price = null) {

    let total = price || localStorage.getItem("cartTotal");

    let address = JSON.parse(localStorage.getItem("address"));

    if (!address) {
        alert("Please add address first");
        window.location.href = "address.html";
        return;
    }

    var options = {

        key: "rzp_test_SteGLT5AXsxzFs",

        amount: total * 100,
        currency: "INR",

        name: "Flipkart Clone",
        description: "Order Payment",

        image: "https://cdn-icons-png.flaticon.com/512/732/732084.png",

        handler: function (response) {

            alert("Payment Successful 🎉");

            // clear cart after payment
            localStorage.removeItem("cart");
            localStorage.removeItem("cartTotal");

            window.location.href = "index.html";
        },

        theme: {
            color: "#2874f0"
        }
    };

    let pay = new Razorpay(options);
    pay.open();
}

window.makePayment = makePayment;