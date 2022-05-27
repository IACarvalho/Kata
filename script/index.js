function validateEmail() {
    const email = document.getElementById("email").value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        document.getElementById("email").style.border = "1px solid #5e6e66";
        document.querySelector("#alert-email").style.display = "none";
        return true;
    } else {
        document.getElementById("email").style.border = "1px solid red";
        document.querySelector("#alert-email").style.display = "block";
        return false;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    if (password.length > 7) {
        document.getElementById("password").style.border = "1px solid #5e6e66";
        document.querySelector("#alert-password").style.display = "none";
        return true;
    } else {
        document.getElementById("password").style.border = "1px solid red";
        document.querySelector("#alert-password").style.display = "block";

        return false;
    }
}

function handleLoginButton() {
    if (validateEmail() && validatePassword()) {
        //document.querySelector("#login-form").submit();
        alert("Entrou!");
    }
}