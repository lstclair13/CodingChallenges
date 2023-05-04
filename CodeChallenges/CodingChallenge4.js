function LongestWord(sen) { 
    sen = sen.split(" ")
    let senSplit
    senSplit = sen[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    senSplit = senSplit.trim()
    for(i = 0; i < sen.length; i++){
      loopSplit = sen[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
      if(senSplit.length < loopSplit.length){
        senSplit = loopSplit
      }
    }
    // // code goes here  
     return senSplit; 
  
  }