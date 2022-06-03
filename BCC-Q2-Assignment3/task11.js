
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

if (A.includes(B) === true) {
    alert(B + " " + "is available at index " + A.indexOf(B) + " " + " in our bakery")
}
else {
    alert("We are sorry. " + B + " " + "is not available in our bakery.");
}
