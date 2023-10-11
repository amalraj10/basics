

//w a p program to print common numbers from the given array
 //binary search
p=[10,11,12,20,30] 
q=[11,20,25,30,33]

ispresent =false
for(let i of p){
    for(let j of q){
        if(i==j){
            ispresent =true
            console.log(i);
            break;
        }
    }
}
!ispresent&&console.log('no common element');