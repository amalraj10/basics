numbers=[[10,20,[50,60]],[65,10,2],[[18,14],21,11],[99,2,6]]
//find the number greater than 50
console.log(numbers.flat(Infinity).filter(num=>num>50))
console.log('__________________________');
//find the largest number
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2))
console.log('__________________________');

//find the smallest number
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2))
console.log('__________________________');
//find the total sum
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2))
console.log('__________________________');
     