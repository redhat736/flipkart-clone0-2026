document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = this;
    let button = form.querySelector("button");

    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.sendForm("service_6fwcd3m", "template_wo2yrg7", form)
        .then(function () {

            alert("Message Sent Successfully ✅");

            // redirect after user clicks OK
            window.location.href = "index.html";

        }, function (error) {

            alert("Failed to send ❌ Please try again");

            button.innerText = "Send Message";
            button.disabled = false;

        });
});