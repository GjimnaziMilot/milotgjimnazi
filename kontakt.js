document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    var feedback = document.getElementById('contact-feedback');

    if (!form || !feedback) {
        return;
    }

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            feedback.innerHTML = '<div class="alert alert-danger">Ju lutem plotësoni të gjitha fushat e detyrueshme para dërgimit.</div>';
            form.classList.add('was-validated');
            return;
        }

        event.preventDefault();

        var name = encodeURIComponent(document.getElementById('name').value.trim());
        var email = encodeURIComponent(document.getElementById('email').value.trim());
        var message = encodeURIComponent(document.getElementById('message').value.trim());
        var subject = encodeURIComponent('Mesazh nga kontakti i Gjimnazit Milot');
        var body = encodeURIComponent('Emri: ' + name + '\nEmail: ' + email + '\n\nMesazhi:\n' + message);

        var mailtoLink = 'mailto:milotgjimnazi@yahoo.com?subject=' + subject + '&body=' + body;
     

        feedback.innerHTML = '<div class="alert alert-success">Emaili juaj po hapet në klientin tuaj të postës. Faleminderit që na kontaktuat.</div>';
        form.reset();

        var submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Dërgo';
        }
    });

    form.addEventListener('input', function () {
        if (feedback.innerHTML.trim() !== '') {
            feedback.innerHTML = '';
        }
    });
});
