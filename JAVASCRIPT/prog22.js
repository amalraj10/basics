//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * * 
//* * 
//*
for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
    
    str=str+'  *'
    }
    console.log(str);
    }


    for(row=1;row<=4;row++){
        str=''
        for(col=4;col>=row;col--){
        
        str=str+'  *'
        }
        console.log(str);
        }
    
    
        console.log('___________');






//            *
//          *   *
//         *  *   *
//        *  *  *  * 

for(row=1;row<=5;row++){
    str=''
    for(sp=5;sp>row;sp--){
        str=str+' '
    }
        for(col=1;col<=row;col++){
            str=str+' *'
        }
        
        console.log(str);
    }

for(row1=1;row1<=4;row1++){
    str1=''

    for(sp=1;sp<=row1;sp++){
        str1=str1+' '
    }
        for(col1=4;col1>=row1;col1--){
            str1=str1+' *'
        }
        
        console.log(str1);
    }
