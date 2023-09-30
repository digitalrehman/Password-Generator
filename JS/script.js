document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function() {
        const password = generatePassword(12); // You can change the password length here
        passwordField.value = password;
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});