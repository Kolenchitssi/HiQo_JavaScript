/*Task 1*/
function summ() {
  // TODO: implement function
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
  let sum=0;
  for (let i = 0; i < arguments.length; i++) {
    console.log (typeof +arguments[i])   
     if (+arguments[i]){
     sum+= +arguments[i];
     console.log (sum)      
  }  
}
  return sum;
}

// Expected result
console.log(summ(1, '2', '3', 5, 'abc') ); // => Number 11, 'abc' was ignored
