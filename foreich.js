const  buahbuahan = new Map([
    ["apel", 500],
    ["cau", 300],
    ["jeruk", 200]
  ]);
  
  
  buahbuahan.forEach (function(value, key){
      console.log(key + ' = ' + value)
  })