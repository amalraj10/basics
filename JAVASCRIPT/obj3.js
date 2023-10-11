//text="hai hello all hello world"
//w a p to print the word count from the given text

text = "hai hello all hello world"
s=text.split(' ')
console.log(s);
obj={}
for ( i of s) {
    c=0
for ( j of s) {
       if(i==j)
        c++
}
 obj[i]=c
}
console.log(obj);


//same question using array method
text = "hai hello all hello world"
wc={}
text.split(' ').forEach(item=>item in wc?wc[item]+=1:wc[item]=1)
console.log(wc);


//numArray=[10,20,30,40,30,20,50,30,60,70,10,40,80]
//find the number count
numArray=[10,20,30,40,30,20,50,30,60,70,10,40,80]
cc={}
numArray.forEach(item=>item in cc?cc[item]+=1:cc[item]=1)
console.log(cc);


console.log('_____________________');

//loop

obj={}
for(let num of numArray){
if(num in obj){
    obj[num]+=1
}
else{
    obj[num]=1
}
console.log(obj);
}

console.log('_____________________');


pattern="ABCBACAA"
//W A P TO PRINT FIRST REURSIVE LETTER
// pattern.split(' ').forEach(a,b=>c=a==b?console.log(c);)

letters=Array.from(pattern)
console.log(letters);
obj={}
for(let l of letters){
    if(l in obj){
        console.log('first recursive is :',1);
        break
    }
    else{
        obj[1]=1
    }
}

console.log('_____________________');


weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]

//print district with its highest temparature
output={}
for(let data of weatherData){
dist=data.district
currentTemp=data.weather
if(dist in output){
    otemp=output[dist]
    if(otemp>currentTemp){
       output[dist]=otemp
    }
    else{
        output[dist]=currentTemp
    }
}
        else{
            output[dist]=currentTemp
        }
}
console.log(output);

//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}




//
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

for(let d of products){

console.log(d.pName);
}

//2. print all mobile details whose display is lcd

for(let d of products){
if(d.display=="lcd"){
console.log(d);
}
}

//3. print 5g mobile phone name

for(let d of products){
    if(d.band=="5g"){
    console.log(d.pName);
    }
    }
    console.log('_____________________');

    ///array method
 products.filter(data=>data.band=="5g").forEach(items=>console.log(items))
 console.log('_____________________');
//4. sort mobile based on price
for(let d of products){
 products.sort((a,b)=>a.price-b.price)
   

    }
    for(let d of products){

        console.log(d.pName);
        }
        console.log('_____________________');
//array method
console.log("sort mobile based on price");
products.sort((data1,data2)=>data1.price-data2.price).forEach(item=>{console.log(item.pName);})

        console.log('_____________________');
//5. print costly mobile
for(let d of products){
  vc=products.reduce((a,b)=>a.price>b.price?a.pName:b.pName)
  
}
console.log(vc);
console.log('_____________________');

//6. print low cost mobile
console.log("............................");

for (let i of products) {
    h=products.reduce((n1,n2)=>n1.price<n2.price?n1:n2)
      
   }
   console.log(h.pName);





   console.log("............................");


   //
   accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]




//1. total number of accounts
 

console.log(accounts.length);
console.log('__________________________');
//2. print account number whose ac_type is savings
accounts.filter(data=>data.ac_type="savings").forEach(items=>console.log(items.acno))

console.log('__________________________');
//3.print the balance of accnount number 1000

// accounts.find(data=>data.acno="1000").forEach(items=>console.log(items.balance))
//4. print all gpay transactions
accounts.map(data=>data.transaction).flat().filter(item=>item.mode=="gpay").forEach(item=>console.log(item))
console.log("_________________________");
  
//5. print all transaction whose amount > 5000
accounts.map(data=>data.transaction).flat().filter(item=>item.amount>5000).forEach(item=>console.log(item))
console.log("_________________________");
  
//6. print credit transaction of account 1002

credittran=accounts.map(data=>data.transaction).flat().filter(a=>a.to==1002).forEach(item=>console.log(item))
console.log("_________________________");
//7. print debit transaction of account 1002
debtran=accounts.find(data=>data.acno=1002).transaction
console.log(debtran);
console.log("_________________________");
//8. print transaction history of 1002
tranhist={
    credit:credittran,
    debit:debtran

}
console.log(tranhist);

//array
history=[credittran,debtran]
console.log(history);
//another method


//9. print highest balance account details