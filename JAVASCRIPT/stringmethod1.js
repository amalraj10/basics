sentance="good evening all"
vowels=['a','e','i','o','u','A','E','I','O','U']
//print all vowels from the string
// characters = sentance.split('')
// console.log(characters);
// for(let char of characters){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }


Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>{console.log(item);})

text='please visit microsoft'
//repalce microsoft with google

console.log(text);
console.log(text.replace('microsoft','google'));
console.log(text.replaceAll('microsoft','google'));




text='please visit Ajay'

console.log(text);
console.log(text.replace('Ajay','AjayBB'));


text='please visit Ajay.Ajay is smart boy with cute smile'

console.log(text);
console.log(text.replaceAll('Ajay','AjayBB'));
