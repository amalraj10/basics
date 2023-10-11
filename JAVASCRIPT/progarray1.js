weekdays=['mon','tue','wed']           //array normal
console.log(weekdays[weekdays.length-1]);
weekdays.push('thurs','fri')            //to ad new element thurs and fri
console.log(weekdays);
weekdays.unshift('sun')       //to add new element in the first position
console.log(weekdays);        
weekdays.pop()                       //to remove element from the first position
console.log(weekdays);               
weekdays.shift()                      //to remove element from the first position
console.log(weekdays);


console.log('____________________'); //for method
a=['apple','orange','pineapple','kiwi']
console.log(a);
for(i=0;i<a.length;i++)
{
    console.log(a[i]);
}

console.log('____________________');



for(let index in a){ //for in method
console.log(a[index]);
}

console.log('____________________');


for(let n of a)  //for of method
console.log(n);

console.log('____________________');

//find the lowest expense
//find the higest expense
//find the lowest expense

expense=[12000,23000,40000,34000,55000,24000,10000,14000]

lowest=expense [0]

for(let num of expense){
   
    if (num<=lowest) {
        lowest = num
    }
}
console.log(lowest);

console.log('____________________');

highest=expense [0]

for(let num of expense){

    if (num>=highest) {
        highest = num
    }
}
console.log(highest);

console.log('____________________');

total=0
for(let num of expense){
    total=total+num
}
console.log(total);

console.log('____________________');
//w a p program to check whether 2 is present in given array

number=[10,11,12,3,2,4,56]


searchitem =2
ispresent= false

for(let num of number){

    if (num==searchitem) {
        ispresent= true
        break;
    }
}

console.log(ispresent?'present':'not present');

console.log('____________________');
//input=[4,5,6]
//output=[11,10,9]
input=[4,5,6]
total=0
ans=[]
for(let num of input){
    total=total+num
}
 for(let num of input){
    ans.push(total-num)
     

}
 
console.log(ans);

console.log('____________________');

//w a p program to print duplicate element from the array
//a=[10,20,30,40,50,60,10] = ans  :10 20 30


a=[10,20,20,30,30,40,50,60,10]
ispresent=false

for(i=0;i<a.length;i++){
 for(j=i+1;j<a.length;j++)
 if(a[i]==a[j]){
    ispresent=true
    console.log(a[i]);
 }
    
}

!ispresent&&console.log('not duplicate');


console.log('____________________');




//w a p to print pairs whoose sum is 6

b=[2,3,4,5]

t=true

for(i=0;i<b.length;i++){
 for(j=i+1;j<b.length;j++){
  if(b[i]+b[j]==6){
    t=true
    console.log(b[i]);
    console.log(b[j]);
    
 }
}
}

!t&&console.log('no pair');


console.log('____________________');
//w a p program to print common numbers from the given array
