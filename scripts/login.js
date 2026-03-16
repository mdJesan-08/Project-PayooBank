// console.log("Hello from login js");

const numInp = document.getElementById("number-input");
const passInp = document.getElementById("pass-input");
const btn = document.getElementById("login-btn");

btn.addEventListener("click",function(){
    console.log("btn clciked");
    console.log(numInp.value);
    if(numInp.value === "01234567890" && passInp.value ==="1234")
    {
        alert("login Successful");
        window.location.assign("/home.html")
    }
    else
    {
        alert("Username or Password Incorrect");
        return;
    }
    
    
})




