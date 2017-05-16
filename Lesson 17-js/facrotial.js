function factorial(n){
  if(typeof n === 'string'){
          return NaN
  }
  return (n === 0) ? 1:(n * factorial(n-1))
}

console.assert(factorial(1) === 1)
console.assert(factorial(6) === 6*5*4*3*2*1)
console.assert(Number.isNaN(factorial('string')) === true)  
