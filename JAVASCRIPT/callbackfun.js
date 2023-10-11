//callback function


//function definition of greet function
function greet(name,callback) {
    console.log('hai',name);
    callback()
}
//function definition of csllme function
function callme(){
    console.log('i am a call back  function');
    
}
//function call
greet('peter',callme)
console.log('____________');


//asynchoronous function:
console.log('hai');
setTimeout(()=>{console.log('i am a asynchoronous function');},5000)


//anonymus function
console.log('hai');
setTimeout(()=>{console.log(' i am a anonymus function');},5000);



//nested property
//clauser property


globalproperty = 'global'
console.log('global property is ${globalproperty}');
const parent = ()=>{
    let parentproperty = 'parent'
    console.log('parent property is :${parentproperty} and globalproperty is ${globalproperty} and childproperty is :${childproperty}');
}
const child = ()=>{
    let childproperty = 'parent'
    console.log('childproperty is :${childproperty} and globalproperty is ${globalproperty} and parentproperty is :${parentproperty}');
}
child()
parent()

