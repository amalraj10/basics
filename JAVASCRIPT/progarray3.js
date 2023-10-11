var a=[10,11,12,3,4,2]

low=0
up=a.length-1
searchitem=3

a.sort((num1,num2)=>num2 - num1)
console.log(a);
ispresent=false
count=0
while(low<=up){
count++
mid = Math.floor((low+up)/2)
   if(a[mid]=searchitem){
    ispresent=true
    break
}
else if(a[mid]<searchitem){
    low=mid+1
}
else if(a[mid]>searchitem){
    low=mid-1
}
}
console.log(count);
console.log(ispresent?'present':'not present');



console.log('_____________________');


//w a p program to print common numbers from the given array
 //binary search

 p = [10, 11, 12, 20, 30]
q = [11, 20, 25, 30, 33]

p.sort((n1, n2) => n1 - n2)
q.sort((n3, n4) => n3 - n4)

console.log(q);
console.log(p);

 k = false
 d = 0
f = 0

while (d < q.length && f < p.length) {
    if (q[d] === p[f]) {
        k = true
        console.log(q[d])
        d++
        f++
    } else if (q[d] < p[f]) {
        d++
    } else {
        f++
    }
}
!k&&console.log("No common elements");


console.log('_____________________');


b=[2,3,4,5]
low=0
up=b.length-1
pairsum=6
ispresent=false
currsum=0
while(low<up){
    currsum= b[low]+b[up]
     if(currsum==pairsum){
        ispresent=true
        console.log(b[low],b[up]);
        low++
     }
       else if(currsum<pairsum){
        low++
       }
       else if(currsum>pairsum){
        up--
       }
    }

!ispresent&&console.log('no pair');


