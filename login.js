var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "youcantknowthisusername" && password == "youcantknowthispassword"){
showdownloads();
hidelogin();
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
    function showdownloads() {
    var hid = document.getElementsByClassName("downloads");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}

    function hidelogin() {
    var hid = document.getElementsByClassName("login");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "hidden";
    }
}
