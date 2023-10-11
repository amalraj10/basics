//{id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'pareleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
console.log("_________________________");

//display all products
products.map(e=>e[1]).forEach(p => {console.log(p);});
console.log("_________________________");

//display products whose price < rs.50
products.filter(pro=>pro[1]<50).forEach(pro=>{console.log(pro[1]);});
console.log("_________________________");

//print price of oreo

oreo=products.find(nm =>nm[1]=='oreo')
console.log(oreo[2]);

console.log('_________________________');


///print costly product name

high=products.reduce((s1,s3)=>s1[2]>s3[2]?s1:s3)
console.log(high);
console.log('_________________________');
//display out of stock products
products.filter(proo=>proo[3]==0).forEach(proo=>{console.log(proo[1]);})

console.log('_________________________');
//sort product based in decending order
products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(pro=>{console.log(pro[1]);})

console.log('_________________________');

//print the product having maximum available stock
maxstock=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)

console.log('_________________________');
//is there any product can be purchased by rs.10
product=products.some(pro=>pro[2]<10)
console.log(product?'yes':'no');

console.log('_________________________');

//is there any product in the range of 10 to 30
pr1=products.some(n=>n[2]>=10 && n[2]<=30)
console.log(pr1?'yes':'no');

console.log('_________________________');

//print all products in the range of 10-30