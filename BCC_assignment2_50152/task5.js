
// // random value generated 

// var y = Math.floor(Math.random() * 10 + 1); 
      
// // counting the number of guesses 
// // made for correct Guess 
// var guess = prompt("Enter a number ranging from 1 to 10"); 
  
// document.getElementById("guess").onclick = function(){ 
  
// // number guessed by user      
// var x = document.getElementById("guessField").value; 

// if(guess === y) 
// {     
//    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//            + guess + " GUESS "); 
// } 
// else if(guess > y) /* if guessed number is greater 
//                than actual number*/ 
// {      
//    alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
// } 
// else
// {  
//    alert("OOPS SORRY!! TRY A GREATER NUMBER") 
// } 
// } 

var secret = Math.floor(Math.random() * 11);
// alert(secret);

var guess = +prompt("Enter your guess: ");

if(guess === secret) {
    alert("Bingo! Correct answer")
} else if(guess + 1 === secret) {
    alert("Close enough to the correct answer")
} else {
    alert("Better Luck next time")
}