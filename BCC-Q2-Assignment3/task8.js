document.write("<h3>Counting:</h3>" + "<br>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<br>")

document.write("<h3>Reverse Counting:</h3>" + "<br>")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<br>")

document.write("<h3>Even:</h3>" + "<br>")
for (var i = 0; i <= 20; i++) {
    if (i === 0 || i%2 ===0){
    document.write(i + ",");
}
}
document.write("<br>")

document.write("<h3>Odd:</h3>" + "<br>")
for (var i = 0; i <= 20; i++) {
    if (i%2 ===1){
    document.write(i + ",");
}
}
document.write("<br>")

document.write("<h3>Series:</h3>" + "<br>")
for (var i = 1; i <= 20; i++) {
    if (i%2 ===0){
    document.write(i + "k,");
}
}
document.write("<br>")