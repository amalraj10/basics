/// write a program to swap b/w two numbers

//input x=10 y=20
//output x=10 y=20

var x=10
var y=20

temp=x

x=y
y=temp

console.log(x,y);



x=60
y=40
console.log(`value of x before swapping ${x}`);
console.log(`value of y before swapping ${y}`);
y=x+y
console.log(`value of x after swapping ${x=y-x}`);
console.log(`value of y after swapping ${y=y-x}`);