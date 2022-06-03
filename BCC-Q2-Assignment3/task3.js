var colors = new Array("red", "white", "green")
document.write(colors + "<br>");
var add = prompt("what color do u want to add to the beginnning of the array? red, white, green");
colors.unshift(add);
document.write(colors +"<br>");
var add1 = prompt("what color do u want to add to the end of the array? red, white, green");
colors.push(add1);
document.write(colors +"<br>");
colors.unshift("Green","White");
document.write(colors +"<br>");
colors.shift();
document.write(colors +"<br>");
colors.pop();
document.write(colors +"<br>");
var addIndex = +prompt("Enter the index no u want to add color in an array of 3:");
var addColor = prompt("Enter the color u want to add at the selected index? red, white, green");
colors.splice(addIndex,0,addColor)
document.write(colors +"<br>");
var delIndex = +prompt("Enter the index no u want to delete color:");
var delColor = prompt("Enter the no of colors u want to delete from the selected index");
colors.splice(delIndex,delColor)
document.write(colors +"<br>");
