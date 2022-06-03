var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var o = ["th","st","nd","rd"];

function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < aCities.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + aCities[n] + "<br>");

console.log(output);
document.write(output);
}