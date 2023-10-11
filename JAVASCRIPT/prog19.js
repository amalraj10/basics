// w a p  to display numbers whose exponensial is in the 8 to 36
//user can input the power to find exponential for a particular number
//power =2                            3
//1 4 9 16 25 36 49                   1 8 27 64 125 
//output = 3 4 5 6                        2 3


p=3
i=1
while(i<=36){
    if(8<=i**p && i**p<=36){
        console.log(i);
    }
    if(i**p==36){
        break
    }
    i++
}
