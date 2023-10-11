//map method

a=[10,11,12,13,14,15]
// w . a . p to print new array having the squares of the given numbers
sq=a.map(num=>num**2)
console.log(sq);



// w . a . p to print new array having the cubes of the given numbers
cube=a.map(num=>num**3)
console.log(cube);


// w . a . p to print new array having numbers <=13 then increment or number>13 he decrement the numbers

id=a.map(num=>num<=13? num+1:num-1)
console.log(id);
console.log("_______________________________________");
//array method-reduce

a=[1,2,3,4,5,6,7]
//find the highest Number
highest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log('highest is',highest);
//find the lowest number
lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log('lowest is ',lowest);
//find the total sum=
total=a.reduce((num1,num2)=>num1+num2)
console.log('total is :',total);

console.log("_______________________________________");
//array method-reduce
//array method -filter

a=[10,11,12,13,14,15]
//display all even number from the given array =10,12,14
even=a.filter(num=>num%2==0)
console.log('even number is',even);
//print all numbers greater than 13
num1=a.filter(num=>num>13)
console.log(num1);


console.log("_______________________________________");
//array method-flat
a=[[10,20],[30,40],[50,60],]
console.log(a);
console.log(a.flat());

console.log("_______________________________________");
//array method-find,includes,indexOf

fruits=['apple','orange','kiwi','mango']
m=fruits.find(num=>num=='mango')
console.log(m);



fruits.includes('m')
console.log(m?'yes':'no');
console.log(fruits.indexOf('mango'));

console.log("_______________________________________");
//array method-splice
a=['max','miller','mini','manu']
a.splice(2,0,'maxwel')
console.log(a);



employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
employename=employee.map(emp=>emp[1]).forEach(employe=>{console.log(employe);});
console.log('all employee name');
console.log("_______________________________________");
//print developer employee details
employee.filter(emp=>emp[2]=='developer').forEach(employe =>{console.log(employe);})
console.log("_______________________________________");
//print employee whose salary > 30000
console.log('employee whose salary >30000');
employee.filter(emp=>emp[4]>30000).forEach(employe=>{console.log(employe);})
console.log("_______________________________________");
// print details of employee Laisha  
Laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(Laisha);
console.log("_______________________________________");
// print the employ name whose have the higest salary
highest=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highest[1]);
// print the employ name whose have the least salary
leastsal=employee.reduce((emp1,emp2=>emp1[4]<emp2[4]?emp1:emp2))
console.log(leastsal[1]);
console.log("_______________________________________");

//print the employ name whose have the total salary
