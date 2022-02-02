var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var min  = numbers.filter((num)=>{
    return num < 6;
})
console.log(min);