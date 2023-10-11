
//input      2            3            4                    5
//           24           369          4936                61725

//            2+22        3+33+333     4+44+444+4444       5+55+555+5555


i=1
input =3
str =''
sum=0
while(i<=input){
 str=str+input //333
 sum=sum+Number(str) // 36
 i++
}
console.log(sum);
