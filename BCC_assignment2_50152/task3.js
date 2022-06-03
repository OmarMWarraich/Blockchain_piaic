var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}  // true because it is pre increment.

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // b++ !== 83 because b it is post increment.

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} // condition 2 is true & condition 4 is true. codition 1 is false because post increment. condtion 3 false because preincrement.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals",);
} //The cost equals

if (true){
    alert("True");
    }
if (false){
    alert("False");
    } // alerts only True because only true condition set no parameters defined.


if("car" < "cat"){
    alert("car is smaller than cat");
    } //alerts
