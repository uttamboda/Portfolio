
emailjs.init("uXPW0rvQFdy_ep6iN"); 

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_yxz55lb', 'template_j4xp026', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);  
            alert('Message sent successfully!');
            
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);  
            alert('Failed to send message. Please try again.');
        });
});