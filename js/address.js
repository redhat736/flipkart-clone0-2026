window.goToPayment = function () {

    let addressData = {
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        address: document.getElementById("address").value
    };

    // validation
    if (!addressData.country || !addressData.state || !addressData.city) {
        alert("Please fill full address");
        return;
    }

    localStorage.setItem("address", JSON.stringify(addressData));

    window.location.href = "payment.html";
};