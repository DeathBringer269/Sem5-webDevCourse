var input = document.getElementById("emailField");
var div = document.getElementById("validator-background");
var label = document.getElementById("label");

input.onkeyup = function validateEmail() {
    var email = input.value;
    if (validateEmailReg(email)) {
        div.style.background = 'green';
    } else {
        div.style.background = 'red';
        label.style.color = "white";
    }
}

function validateEmailReg(email) {
    var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return reg.test(email);
}
