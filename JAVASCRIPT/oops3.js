
//classical inheritace
class Parent{
    bike(){
        console.log('duke');
    }
}
class Child extends Parent{

}
const obj = new Child()
obj.bike()


console.log('_________________________');
//prototype inheritance/object inheritance

boleno={
    model:'hatch batch',
    varient:["automatic","manuel"],
    manufacturer:'maruthi'
}
glanza={
    manufacturer:'Toyoto'
}
glanza.__proto__=boleno
console.log(glanza.model);

console.log('_________________________');
//multilevel inheritance
class A{
    methoda(){
        console.log('inside class A');
    }
}
    class B extends A {
        methodb(){
            console.log('inside class B');
        }
}
class C extends B {
    methodc(){
        console.log('inside class C');
    }
}


const obbj=new C
obbj.methodc()
obbj.methodb()
obbj.methoda()

//
console.log('_________________________');
//polymorphism



class M{
    methodm(){
        console.log("inside first method");

    }
    method(p){
        this.n1=p
        console.log('inside second method',n1);
    }
}
obj.methodm()
obj.methodm(3)