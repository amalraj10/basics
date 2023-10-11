class Employee{
   //property - variable inside class
   
    empId
    empName
    empDesg
    empSalary

    //constructors-to initialize property-instance variable-this.variable
    constructor(id , name , desg, salary){
        this.empId=id
        this.empName=name
        this.empDesg=desg
        this.empSalary=salary
    }
    //methods-functions inside a class
    display(){
        console.log(`employee name is ${this.empName},employee id is ${this.empId},employe designation is ${this.empDesg},employe salary is ${this.empSalary}`);
    }
}
//object
const emp1=new Employee(1001,"max","developer",1000000)
emp1.display()


console.log("___________________________________________");

///
class Student{
stId
stName
stClass
stLoc
 
constructor(id,name,cls,location){
    this.stId=id
    this.stName=name
    this.stClass=cls
    this.stLoc=location
}
display(){
    console.log(`student name is ${this.stName},student id is ${this.stId},student class is ${this.stClass},student location is ${this.stLoc}`);

}
}
const st1=new Student(1001,"lol","plustwo","kannur")
st1.display()


