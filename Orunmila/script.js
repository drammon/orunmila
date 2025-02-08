document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameField = document.getElementById("userNameRegister");
    const emailField = document.getElementById("userEmail");
    const passwordField = document.getElementById("pwdRegister");
    const confirmPasswordField = document.getElementById("confirmPwd");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let valid = true;

        if (nameField.value.trim() === "" || nameField.value === "Insira seu nome") {
            alert("Please enter your full name.");
            valid = false;
        }

        if (!validateEmail(emailField.value)) {
            alert("Please enter a valid email.");
            valid = false;
        }

        
        if (passwordField.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            valid = false;
        }

        
        if (passwordField.value !== confirmPasswordField.value) {
            alert("Passwords do not match.");
            valid = false;
        }

        if (valid) {
            alert("Form successfully submitted!");
            form.submit(); 
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }




    
    const loginForm = document.getElementById("loginForm");
    const loginNameField = document.getElementById("userName");
    const loginPasswordField = document.getElementById("pwd");
    
    var user = "admin"
    var key = "123456" 

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let validLogin = true;

        
        if (loginNameField.value.trim() === "") {
            alert("Please enter your username.");
            validLogin = false;
        }

        
        if (loginPasswordField.value.trim() === "") {
            alert("Please enter your password.");
            validLogin = false;
        }

        if (loginPasswordField.value.trim() != key || loginNameField.value.trim() != user) {
            alert("This user does'nt have permission to access yet. Try 'admin' for username and '123456' for password.");
            validLogin = false;
        }

        
        if (validLogin) {
            alert("Login successful!");
            loginForm.submit(); // Submits the form
            window.location.href = "docs/main-page/main.html"
        }
    });
});