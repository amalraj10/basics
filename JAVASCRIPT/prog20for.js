//w a p  to display from 1 to 10 using for loop
//w a p to display from 10 to 1 using for loop
//w a p to find the factorial of a given number
//w a p check whether the number is prime or not 


for(i=1;i<=10;i++){
console.log(i);
}


console.log('______________________');



for(i=10;i>=1;i--){
 console.log(i);
}

console.log('______________________');
num=4
fact=1
for(i=1;i<=num ;i++){
    fact=fact*i
}
console.log(fact);

console.log('______________________');
num=2
ns=0
count=0
for(i=1;i<=num;i++){
  ns=num%i
  if(ns==0){
    count++
  }

}
if(count==2){
    console.log('prime');
}
else{
    console.log('not prime');
}

console.log('______________________');
//w a p to find GCD/HCF of agiven two number
num1=20
num2=10
gcd=0
for(i=1; i<=num1 && i<=num2 ; i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd);