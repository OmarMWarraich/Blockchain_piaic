var fistNumber = +prompt("Enter the first number");
var SecondNumber = +prompt("Enter the second number");
var Operation = prompt("Enter any operator..+,-,*,/,%");

if (Operation == '+') {
    alert(`The sum of the two numbers is ${fistNumber + SecondNumber}` )
} 

else if (Operation == '-') {
    alert(`The difference of the two numbers is ${fistNumber - SecondNumber}` )
} 

else if (Operation == '*') {
    alert(`The product of the two numbers is ${fistNumber * SecondNumber}` )
} 

else if (Operation == '/') {
    alert(`The division of the two number is ${fistNumber / SecondNumber}` )
} 

else if (Operation == '%') {
    alert(`The modulus of the two number is ${fistNumber % SecondNumber}` )
} 
else{
    alert("Please provide the correct operator!")
}