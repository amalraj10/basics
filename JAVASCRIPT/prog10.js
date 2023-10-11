// w.a. p to print the second largest number among the e given number and also sort them in decending order



num1=10
num2=15
num3=9

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`${num2} is the second largest`);
        console.log(`decending order is ${num1}, ${num2}, ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest`);
        console.log(`decending order is ${num1}, ${num3}, ${num2}`);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`${num1} is the second largest`);
        console.log(`decending order is ${num2}, ${num1}, ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest`);
        console.log(`decending order is ${num2}, ${num3}, ${num1}`);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`${num1} is the second largest`);
        console.log(`decending order is ${num3}, ${num1}, ${num2}`);
    }
    else{
        console.log(`${num2} is the second largest`);
        console.log(`decending order is ${num3}, ${num2}, ${num1}`);
    }
}
else{
    console.log('all are equal');
}