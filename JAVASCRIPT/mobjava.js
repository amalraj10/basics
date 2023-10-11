j=0
mobnum=(mn)=>{
    while (mn>0) {
        j++ 
       mn=parseInt(mn/10)  
       //   console.log(num);  
       }
       if (j==10) {
        console.log("MOBILENUMBER");
       }
       else
       console.log("not");
}
mobnum(1234567890)

console.log('__________');




const mobile = num=>{
    n=num.length
    if(n==10){
        console.log('  mobile number ');
        
    }
    else{
        console.log('not a mobile number');
    }
}
mobile(9074980006)


//checkwhether it is email or not


const mail =(email)=>{
    if(email.endsWith('@gmail.com')){

        console.log('email');
    }
    else{
        console.log('not email');
    }
}
     
mail('amal@gmail.com')


//w a p to print check whethere it is starts with q or not

const name =(value)=>{
    if(value.startsWith('q')|| (value.startsWith('Q'))){

        console.log('true');
    }
    else{
        console.log('false');
    }
}
     
name('Queen')
