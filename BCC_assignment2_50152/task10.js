var password = prompt("Save your password");

var newPassword = prompt("Enter your new password");


if (newPassword === password) {
    alert("Correct! The password you entered matches the original password")
} else if (newPassword !== password){
    alert("Incorrect password. Type your password again.")
} else {
    alert("Please enter your password")
}