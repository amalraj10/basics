//1000,'Neel','developer',

employee={
    empid:1000,
    empname:"neel",
    empdesign:"developer",
    emplocation:"kochi",
    empsalary:25000,
    empexperience:2

}
console.log(employee);
console.log("_________________________");
console.log(employee.empname);
console.log("_________________________");
console.log(employee["empname"]);
console.log("_________________________");
///w a p to print all keys in the given obejects
for(let key in employee){
    console.log(key);
}
console.log("_________________________");
//w a p to print all values in the given obejects
for(let key in employee){
    console.log(employee[key]);
}
console.log("_________________________");
for(let key in employee){
    console.log(key,":",employee[key]);
}
console.log("_________________________");
//w a p to check whether the employee location is present or not,if present print available else not available
ispresent=false
for(let key in employee){
    if(key=="emplocation"){
    ispresent=true
    }
    
}
console.log(ispresent?'available':'not available');

console.log("_________________________");
//else
"emplocation" in employee?console.log('available'):console.log('not available');

console.log("_________________________");
//w. a . p to check whether geder of the employee is present or not present  add gender to the objects
"empGender" in employee?console.log('available'):employee["empGender"]="male";

console.log("_________________________");
//to add gender

console.log(employee);
"empGender" in employee?console.log('available'):employee["empGender"]="male";


console.log("_________________________");


student={
    stno:1,
    name:"Vishnu",
    Location:"kochi",
    class:"plustwo",
   
    
}

console.log(student);

console.log("_________________________");
"stGender" in student?console.log('available'):student["stGender"]="male";

console.log(student);

Object.assign(student,{isvaccinated:true})
console.log(student);

//update
student.stno+=3
student.name="ramu"
console.log(student);

//delete
console.log(delete student.Location);
console.log(student);




