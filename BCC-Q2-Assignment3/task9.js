var arr = [24, 53, 78, 91, 12];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("Array items:" + " " + arr + "<br>")
document.write("The largest number is " + largest)
