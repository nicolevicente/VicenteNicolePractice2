function validateLogin(){
    if(document.getElementById("login").value.length > 0){
        document.getElementById("login").style.backgroundColor = "lightgreen"
    }
        else{
            document.getElementById("login").style.backgroundColor = "pink"
        }
}


function validateEmail(){

let emailConf = document.getElementById("email");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailConf.value.match(mailformat)){
        document.getElementById("mail").innerHTML = " ";
        document.getElementById("email").style.backgroundColor = "lightgreen";
    }
        else{
            document.getElementById("mail").innerHTML = "Mail is wrong";
            document.getElementById("email").style.backgroundColor = "pink";
        }
}

function validatePassword(){
let password = document.getElementById('pw');
let confirmPassword = document.getElementById('cpw');

/**if(password.value.length >= 12){
    document.getElementById("strength").innerHTML = "Strong"
}
    else{
        document.getElementById("mail").innerHTML = "Weak"
    }**/

if(password.value != confirmPassword.value){
    document.getElementById("pass").innerHTML = "Passwords are not the same";
    document.getElementById("pw").style.backgroundColor = "lightgreen";
    document.getElementById("cpw").style.backgroundColor = "pink";
    return false;
}
    else{
        document.getElementById("pass").innerHTML = " ";
        document.getElementById("pw").style.backgroundColor = "lightgreen";
        document.getElementById("cpw").style.backgroundColor = "lightgreen";
        return true; 
}
}

function validate(){
if(document.getElementById("login").style.backgroundColor && document.getElementById("pw").style.backgroundColor && document.getElementById("cpw").style.backgroundColor && document.getElementById("email").style.backgroundColor == "lightgreen"){
    alert("Data has been registered!");
}
    else{
        alert("Please fix inputs.")
    }
}