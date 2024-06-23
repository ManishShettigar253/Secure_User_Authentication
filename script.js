function toggleForm() {
    const formTitle = document.getElementById("formTitle");
    const authForm = document.getElementById("authForm");
    const submitBtn = document.getElementById("submitBtn");

    if (formTitle.textContent === "Login") {
        formTitle.textContent = "Register";
        authForm.action = "register.php"; // Change form action for registration
        submitBtn.textContent = "Register"; // Change button text to "Register"
    } else {
        formTitle.textContent = "Login";
        authForm.action = "login.php"; // Change form action back to login
        submitBtn.textContent = "Login"; // Change button text back to "Login"
    }
}
