// -----------------PRINT ODD NUMBERS IN AN ARRAY--------------------
console.log("PRINT ODD NUMBERS IN AN ARRAY");
//  ANONYMOUS FUNCTION

var res = [];
var a = function (arr1)
{
    for(var i=0; i<arr1.length; i++)
    {
        if(arr1[i]%2 !== 0)
        {
            res.push(arr1[i]);
        }
    }
    return res;
}
console.log("Anonymous Function: ", a([1,2,3,4,5,6,7,8,9,10])); 

// IIFE

(function (arr2)
{
    var res2 = [];
    for(var i=0; i<arr2.length; i++)
    {
        if(arr2[i]%2 !== 0)
        {
            res2.push(arr2[i]);
        }
    }
    console.log("IIFE: ",res2);
})([1,2,3,4,5,6,7,8,9,10]); 

// ARROW FUNCTION


var b = (arr3) =>
{
    var res3 = [];
    for(var i=0; i<arr3.length; i++)
    {
        if(arr3[i]%2 !== 0)
        {
            res3.push(arr3[i]);
        }
    }
    return res3;
}
console.log("Arrow Function: ", b([1,2,3,4,5,6,7,8,9,10]));


console.log("----------------------------------");


// --------------------Sum of all numbers in an array------------------------
console.log("SUM OF ALL NUMBERS IN AN ARRAY");
//ANONYMOUS FUNCTION

var sum1 = 0;
var c = function (arr4){
    for(var i=0; i<arr4.length; i++)
    {
        sum1 = sum1 + arr4[i];
    }
    return sum1;
}
console.log("Anonymous Function Sum: ",c([1,2,3,4,5]));

// IIFE

( function (arr5){
    var sum2 = 0;
    for(var i=0; i<arr5.length; i++)
    {
        sum2 = sum2 + arr5[i];
    }
    console.log("IIFE Sum: ",sum2);
})([1,2,3,4,5]);

//ARROW FUNCTION
var sum3 = 0;
var d = (arr5)=>{
    for(var i=0; i<arr5.length; i++)
    {
        sum3 = sum3 + arr5[i];
    }
    return sum3;
}
console.log("Arrow Function Sum: ",d([1,2,3,4,5]));

console.log("----------------------------------");


//-------------------------Prime numbers in an array----------------------------
console.log("PRIME NUMBERS IN AN ARRAY");
//ANONYMOUS FUNCTION

var e = function(arr6){
    var i,flag = 0;
    var res4 = [];
    for(i=0; i<arr6.length; i++)
    {
        flag = 0;
        for(j=2; j<=arr6[i]/2; j++)
        {
            if(arr6[i]%j == 0)
            {
                flag = 1;
                break;
            }
        }
        if(flag === 0)
        {
            res4.push(arr6[i]);
        }
    }
    return res4;
}
console.log("Anonymous Function: ",e([3,4,5,6,7,8,9,10,11,12,13,14,15]));

//IIFE

(function(arr7){
    var i,flag = 0;
    var res6 = [];
    for(i=0; i<arr7.length; i++)
    {
        flag = 0;
        for(j=2; j<=arr7[i]/2; j++)
        {
            if(arr7[i]%j == 0)
            {
                flag = 1;
                break;
            }
        }
        if(flag === 0)
        {
            res6.push(arr7[i]);
        }
    }
    console.log("IIFE:",res6); 
})([3,4,5,6,7,8,9,10,11,12,13,14,15]);

// ARROW FUNCTION

var f = (arr8)=>{
    var i,flag = 0;
    var res7 = [];
    for(i=0; i<arr8.length; i++)
    {
        flag = 0;
        for(j=2; j<=arr8[i]/2; j++)
        {
            if(arr8[i]%j == 0)
            {
                flag = 1;
                break;
            }
        }
        if(flag === 0)
        {
            res7.push(arr8[i]);
        }
    }
    return res7;
}
console.log("Arrow Function: ",e([3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log("----------------------------------");

//------------------------Return all palindromes in an array-----------------------
console.log("PALINDROMES IN AN ARRAY");
//ANONYMOUS FUNCTION

var g = function (arr9){
    var pali1 = [];
    var temp1;
    var rev = 0;;
    for(var i=0; i<arr9.length; i++)
    {
        temp1 = arr9[i];
        rev = 0;
        while(arr9[i] !== 0)
        {
            rev = rev*10 + arr9[i]%10;
            arr9[i]=Math.floor(arr9[i]/10);
        }
        if(temp1 == rev)
        {
            pali1.push(rev);
        }
    }
    return pali1;
}
console.log("Anonymous Function: ",g([121,23,33,434,12]));

//IIFE
( function (arr10){
    var pali2 = [];
    var temp2;
    var rev = 0;;
    for(var i=0; i<arr10.length; i++)
    {
        temp2 = arr10[i];
        rev = 0;
        while(arr10[i] !== 0)
        {
            rev = rev*10 + arr10[i]%10;
            arr10[i]=Math.floor(arr10[i]/10);
        }
        if(temp2 == rev)
        {
            pali2.push(rev);
        }
    }
    console.log("IIFE: ",pali2);
})([121,23,33,434,12]);

//ARROW FUNCTION

var h = (arr11)=>{
    var pali3 = [];
    var temp3;
    var rev = 0;;
    for(var i=0; i<arr11.length; i++)
    {
        temp3 = arr11[i];
        rev = 0;
        while(arr11[i] !== 0)
        {
            rev = rev*10 + arr11[i]%10;
            arr11[i]=Math.floor(arr11[i]/10);
        }
        if(temp3 == rev)
        {
            pali3.push(rev);
        }
    }
    return pali3;
}
console.log("Arrow Function: ",g([121,23,33,434,12]));

console.log("----------------------------------");

//STRING TO TITLE CAPS IN AN ARRAY

console.log("CONVERTING STRING TO TITLE CAPS");
//Anonymous function

var str = function(str1)
{
  var res = [];
  var st = str1.toString();
  var lw = st.toLowerCase().split(" ");
  
  for(var i=0; i<lw.length; i++)
  {
    lw[i] = lw[i].charAt(0).toUpperCase() + lw[i].slice(1);
    res.push(lw[i]);
  }
  return res.join(" ");
  
}
console.log("Anonymous Function: ",str("guVi gEeK NeTworK"));

// IIFE
(function(str2)
{
  var res1 = [];
  var st1 = str2.toString();
  var lw1 = st1.toLowerCase().split(" ");
  
  for(var i=0; i<lw1.length; i++)
  {
    lw1[i] = lw1[i].charAt(0).toUpperCase() + lw1[i].slice(1);
    res1.push(lw1[i]);
  }
  console.log("IIFE: ",res1.join(" "));
  
})("guVi gEeK NeTworK");

//Arrow Function

var str3 = (str4)=>
{
  var res2 = [];
  var st2 = str4.toString();
  var lw2 = st2.toLowerCase().split(" ");
  
  for(var i=0; i<lw2.length; i++)
  {
    lw2[i] = lw2[i].charAt(0).toUpperCase() + lw2[i].slice(1);
    res2.push(lw2[i]);
  }
  return res2.join(" ");
  
}
console.log("Arrow Function: ",str3("guVi gEeK NeTworK"));

console.log("----------------------------------");

 //MEDIAN OF TWO SORTED ARRAY

 console.log("MEDIAN OF TWO SORTED ARRAY");

 //Anonymous Function

 var fn = function(){
    let arr1 = [2,3,1,4,5];
    let arr2 = [6,8,7,9];
    
    let array = [...arr1,...arr2].sort();
    
    const n=array.length;
    
    
    if(n%2 !== 0)  //odd array
      return array[Math.floor((n/2))];
    
    
    else
      return (array[Math.floor((n/2)-1)] + array[Math.floor(n/2)])/2;
    
    }
    
    console.log("Anonymous Funcion:",fn());


    //IIFE

    (function(arr3,arr4){
        
        let array1 = [...arr3,...arr4].sort();
        
        const n1=array1.length;
        
        
        if(n1%2 !== 0)  //odd array
          console.log("IIFE: ",array1[Math.floor((n1/2))]);
        
        
        else
          console.log("IIFE: ",array1[Math.floor((n1/2)-1)] + array1[Math.floor(n1/2)])/2;
        
        })([2,3,1,4,5],[6,8,7,9])

        //Arrow Fuction

        var fn2 =(arr5,arr6)=>{ 
            let array3 = [...arr5,...arr6].sort();
            
            const n2=array3.length;
            
            
            if(n2%2 !== 0)  //odd array
              return array3[Math.floor((n2/2))];
            
            
            else
              return (array3[Math.floor((n2/2)-1)] + array3[Math.floor(n2/2)])/2;
            
            }
            
            console.log("Arrow Function: ",fn2([2,3,1,4,5],[6,8,7,9]));
        
      

