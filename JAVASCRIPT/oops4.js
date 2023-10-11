function add(...arg){
    console.log(arg);
    console.log("sum",arg.reduce((n1,n2)=>n1+n2));
}
add(10,20)


console.log("________________________________________");


class A{
    methoda(){
        console.log('inside a parent class');
    }
}
class B extends A{
    methoda(){
        console.log('inside a child class');
    }
    methoda(){
        console.log('inside a child1 class');
    }
}
const obj = new B()
obj.methoda()

console.log("________________________________________");



//exception handling-run time errors
//try -catch -finally
exp="10*2+5"
console.log("exception handling");
try{const result = eval(exp)
console.log('resut is :',result);}
catch{
    console.log('error ocuured in line number 35');
}
finally{
console.log('Task completed');
}


