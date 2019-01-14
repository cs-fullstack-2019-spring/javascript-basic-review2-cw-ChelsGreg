


//Create a function that is sent two integers,
// then print from the first integer to the second integer.
// Assume the first integer is less than the second integer.


var num1 = parseInt(num1);
var num2 = parseInt(num2);

function smallBig(num1, num2)
{
    for(var i=num1; i <= num2; i++)
        console.log(i);
}

smallBig(2,9);