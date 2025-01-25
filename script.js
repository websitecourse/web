// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Show alert message
    alert("Thank you for visiting our website. Made by Hammad and Arsal");

    // Get the modal elements
    var loginModal = document.getElementById("loginModal");
    var signupModal = document.getElementById("signupModal");

    // Get the buttons that open the modal
    var loginBtn = document.getElementById("loginBtn");
    var signupBtn = document.getElementById("signupBtn");

    // Get the <span> elements that close the modal
    var closeLogin = document.getElementById("closeLogin");
    var closeSignup = document.getElementById("closeSignup");

    // When the user clicks the button, open the modal
    if (loginBtn) {
        loginBtn.onclick = function () {
            loginModal.style.display = "block";
        };
    }

    if (signupBtn) {
        signupBtn.onclick = function () {
            signupModal.style.display = "block";
        };
    }

    // When the user clicks on <span> (x), close the modal
    if (closeLogin) {
        closeLogin.onclick = function () {
            loginModal.style.display = "none";
        };
    }

    if (closeSignup) {
        closeSignup.onclick = function () {
            signupModal.style.display = "none";
        };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    };
});
