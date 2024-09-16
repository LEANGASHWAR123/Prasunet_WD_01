document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("header nav");
    const closeButton = document.querySelector(".close-btn");
    
    if (menuButton) {
        menuButton.addEventListener("click", function() {
            navMenu.classList.add("active");
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    }
});


// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple form validation
    if (name === '' || email === '' || subject === '' || message === '') {
        displayMessage('All fields are required.', 'error');
        return;
    }

    // Perform AJAX request (mocked for this example)
    setTimeout(function() {
        // Simulate successful form submission
        displayMessage('Your message has been sent successfully!', 'success');
        document.getElementById('contactForm').reset(); // Reset form fields
    }, 1000); // Simulate a delay
});

function displayMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type; // Assign class for styling success/error messages
}
