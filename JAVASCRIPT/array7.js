products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'pareleG',25,10],
    [5,'tiger',20,30]
    [6,'unibic',60,0]
    [7,'good day',70,20]
]
console.log("_________________________");

//display all products
products.map(e=>e[1]).forEach(p => {console.log(p);});


//display products whose price < rs.50
products.filter(pro=>pro[1]<50).forEach(pro=>{console.log(pro[1]);});

