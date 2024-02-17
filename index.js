var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var email1 = document.getElementById("email1");
var pass1 = document.getElementById("pass1");

function validate(event) {
    //avoids automatic form submission
    event.preventDefault();
    let isvalid = true;
    var regemail = /^admin$/;
    if (regemail.test(exampleInputEmail1.value)) {
        email1.innerText = "Username is valid"
        email1.style.color = 'green'
    } else {
        email1.innerText = "Username is invalid"
        email1.style.color = 'red';
        isvalid = false;
    }
    var regpass = /^12345$/;
    if (regpass.test(exampleInputPassword1.value)) {
        pass1.innerText = "Password is matching"
        pass1.style.color = 'green'
    } else {
        pass1.innerText = "Password is not matching"
        pass1.style.color = 'red';
        isvalid = false;
    }

    if (isvalid) {
        Login();
    }

    return isvalid;
}

function Login() {
    var username = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    signin(username, password, callfunction);
}

function signin(username, password, callfunction) {
    if (username === "admin" && password === "12345") {
        callfunction();
    }
}

const callfunction = () => {
    window.location.href = "mainpage.html";
}