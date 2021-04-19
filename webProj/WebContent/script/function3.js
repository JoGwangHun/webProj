// function3.js

var sum= function(a,b){
    var num1=10;
    var num2=20;
    console.log(a+(num1+num2)+b);
    
}
    sum('결과는','입니다.');

 var factorial= function fac(n){
                   if(n==1){
                       return 1;
                          }   
      return n* fac(n-1);
}

var result=factorial(3);
    console.log(result);

function sumVal(a,b){
    return a+b;
}
function mulVal(a,b){
    return a*b;
}
function executeFunc(callback,num1,num2){
   var result= callback(num1,num2);
   return result;
}

result= executeFunc(mulVal, 3,5);
console.log('결과'+result);

