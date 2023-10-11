 // armstrong...... eg:153=1*3+53+3*3
num=1655
n=num
m=num
r=0
j=0
a=0

while (num>0) {
 j++ 
num=parseInt(num/10)  
//   console.log(num);  
}
// console.log(j);


while (n>0) {
    r=n%10
a=(r**j)+a
    n=parseInt(n/10)  
    }
    
    // console.log(a);  

if (a==m) {
 console.log(m,":IS ARMSTRONG");   
}else{
    console.log(m,":IS NOT ARMSTRONG");   

}