function union(arr1, arr2) {
  
    if ((arr1 == null) || (arr2==null)) 
      return void 0;
    
    var obj = {};
   
    for (var i = arr1.length-1; i >= 0; -- i)
       obj[arr1[i]] = arr1[i];
   
    for (var i = arr2.length-1; i >= 0; -- i)
       obj[arr2[i]] = arr2[i];
   
    var res = [];
   
    for (var n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  var a = [10,20,4,40,60,70];
  var b = [1,2,3,4,5,6,7,8,9,10];
  console.log(union(a, b));
  document.write(union(a,b));
  