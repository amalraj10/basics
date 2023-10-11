//w . a . p to check whether palindrone or not


num=333
ne=num
rev=0
remainder=0   
console.log('the given number is :',num);
while (num>0) {
    remainder = num%10
    rev = (rev*10)+remainder
    num=parseInt(num/10)
}
  

if (rev==ne)
{
    console.log('it is palindrone');

}else{
    console.log('it is not palindrone');
}

