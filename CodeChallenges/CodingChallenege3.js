function FirstReverse(str) { 

    // code goes here 
   str =  Array.from(str)
   str = str.reverse()
   str = str.join('')
  return str ; 
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));