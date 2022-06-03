var time = +prompt("Please enter the time in 24hours clock format like: 1900 = 7pm");

if (time >= 0000 && time < 1200 ){
    alert("Good morning!")
} else if (time >= 1200 && time < 1700){
    alert("Good afternoon!")
} else if (time >=1700 && time < 2100){
    alert("Good evening")
} else if (time >= 2100 && time <= 2359){
    alert("Good night")
}