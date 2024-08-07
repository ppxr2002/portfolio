document.getElementById('formContact').addEventListener('submit', function(event) {
    event.preventDefault();

    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert('Please complete the reCAPTCHA.');
        return;
    }

    emailjs.sendForm('service_8lest3i', 'template_z90rqpt', this)
        .then(function(response) {
            alert('Success! Your message has been sent.');
            console.log('Sent successfully', response);
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('Failed', error);
        });
});