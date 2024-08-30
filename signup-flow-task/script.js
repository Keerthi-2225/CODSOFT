document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the usual way

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Basic Validation
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required';
        return;
    }

    // Passwords match validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // Simulate form submission success
    alert('Sign Up Successful');
    // Here you would typically send the data to the backend server for processing
});