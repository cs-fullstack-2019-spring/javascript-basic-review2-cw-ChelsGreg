

//Ask the user to enter a 4 digit code.
// Ask the user to enter the password again.
// If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."


var fourCode = parseInt(prompt("Enter 4 digit code"));
var fourCode2 = parseInt(prompt("Enter code again"));

if(fourCode === fourCode2)
{
    console.log("Password is set.");
}

if(fourCode !== fourCode2)
{
    console.log("ERROR, Passwords are different.");
}