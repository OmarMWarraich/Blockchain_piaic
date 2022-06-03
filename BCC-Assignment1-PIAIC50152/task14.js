var a =2;
var b =1;
var result = --a;
document.write("--a: "+result+"<br>"); //predecrement a 
var result = --a - --b;
document.write("--a - --b: "+result+"<br>"); //predecrement b
var result = --a - --b + ++b;
document.write("--a - --b + ++b: "+result+"<br>"); //pre increment b
var result = --a - --b + ++b + b--; 
document.write("result: "+result+"<br>"); //post decrement b