document.getElementById("btn-login").addEventListener('click', function()
{
    // console.log("Login btn clicked");

    const userNumber = document.getElementById("user-number");
    const contactNumber = userNumber.value;

    const userPass = document.getElementById("user-pass");
    const password = userPass.value;

    if(contactNumber == '01798693868' && password == '115912'){
        alert("Login Successful");

        window.location.assign("./home.html");
    }
    else{
        alert("Login Failed");
    }


})