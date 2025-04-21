window.onload = function () {
    window.validate = function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (
            (username === "Karma" && password === "SeeYouAtTheMovies") ||
            (username === "LITSuser" && password === "SYATM")
        ) {
            alert("Login Successful");
            sessionStorage.setItem("isLoggedIn", true);
            window.location.href = "lostinthescreen.html";
        } else {
            alert("Login Failed");
        }
    };

    window.togglePassword = function () {
        const passwordField = document.getElementById("password");
        const icon = document.querySelector(".toggle-password i");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    };
};
