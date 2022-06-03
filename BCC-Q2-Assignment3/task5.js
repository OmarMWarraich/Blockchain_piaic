  function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
    document.write(uniqueArr);
}

const arr = [3, 'a','a','a',2,3,'a',3,'a',2,4,9,3];

// calling the function
// passing array argument
getUnique(arr);
