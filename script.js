// emailjs.init("up6440631@gmail.com"); 

// document.querySelector(".contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     emailjs.sendForm('service_yxz55lb', 'template_j4xp026', this) 
//         .then(function(response) {
//             alert("Message sent successfully!");
//             document.querySelector(".contact-form").reset(); 
//         }, function(error) {
//             alert("Failed to send message. Please try again.");
//         });
// });

// emailjs.init('up6440631@gmail.com'); // Replace 'YOUR_USER_ID' with your actual User ID from EmailJS

// // Handle form submission
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the default form submission

//     // Log the form data to check if it's being captured correctly
//     const formData = new FormData(this);
//     console.log('Form Data:', formData);  // Inspect the data sent

//     // Send form data using EmailJS
//     emailjs.sendForm('service_yxz55lb', 'template_j4xp026', this)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);  // Log success response
//             alert('Message sent successfully!');
//             document.getElementById('contact-form').reset();  // Reset the form on success
//         }, function(error) {
//             console.log('FAILED...', error);  // Log the error
//             alert('Failed to send message. Please try again.');
//         });
// });


emailjs.init("uXPW0rvQFdy_ep6iN"); // Replace with your EmailJS public user ID

// Grab the form element
const form = document.querySelector('.contact-form');

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Send the form data to EmailJS
    emailjs.sendForm('service_yxz55lb', 'template_j4xp026', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);  // Log success
            alert('Message sent successfully!');
            
            // Optionally, reset the form after submission
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);  // Log failure
            alert('Failed to send message. Please try again.');
        });
});