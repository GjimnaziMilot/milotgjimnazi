// Inicializo EmailJS
(function () {
    emailjs.init({
        publicKey: "07bcM3DkpbMA54nv2"
    });
})();

// Prit derisa faqja të ngarkohet
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    if (!form) {
        console.error("Formulari contact-form nuk u gjet!");
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const btn = form.querySelector("button[type='submit']");

        btn.disabled = true;
        btn.innerText = "Po dërgohet...";

        status.innerHTML = "";

        const params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_h5g8u7p",
            "template_7zae227",
            params
        )
        .then(function (response) {

            console.log("SUCCESS!", response.status, response.text);

            status.innerHTML =
                '<div class="alert alert-success">' +
                'Mesazhi u dërgua me sukses!' +
                '</div>';

            form.reset();

            btn.disabled = false;
            btn.innerText = "Dërgo";
        })
        .catch(function (error) {

            console.error("FAILED...", error);

            status.innerHTML =
                '<div class="alert alert-danger">' +
                'Gabim gjatë dërgimit të emailit.' +
                '</div>';

            btn.disabled = false;
            btn.innerText = "Dërgo";
        });

    });

});
