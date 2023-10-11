var car={
    name:"boleno",
    model:"Hatch back",
    manufacturer:"Maruthi",
    price:"10 lakh"

}


//display car name and manufatured name
console.log(car.name,car.manufacturer);
console.log("_______________________");
//check "model" key is available , if yes then display the value
"model" in car?console.log(car.model):console.log('not available');
console.log("_______________________");
//add "varient" key to car with value as "manuel"
car.varient=["manuel"]
console.log(car);
console.log("_______________________");
//insert another value "automatic" to the "varient" key
car.varient.push("automatic")
console.log(car);
console.log("_______________________");
//add "colour" key to car with values "red","blue","white"

car.color=["red","blue","white"]
console.log(car);
console.log("_______________________");