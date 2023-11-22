const showPass = document.getElementById('eye');
const password =document.getElementById('pass');



function onShowPass(){
    // password.type="text";

    if(password.type ==="text"){
        password.type="password";
    }
    else{
        password.type="text";
    }
}