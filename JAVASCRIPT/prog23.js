// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
    if(row==1 || row==5 || col==5 ||col==1){
        str=str+'*'
    }
    else{
        str=str+' '
    }
    
    str=str+'  '
    }
    console.log(str);
    }


    console.log('___________');



    //*
    //*  *
    //*    *
    //*      *
    //* * * * *
    for(row=1;row<=5;row++){
        str=''
        for(col=1;col<=5;col++){
            if(col==1 || row==5||col-row==0  ){
                str=str+' *'
            }
            else{
                str=str+'  '
            }
     
        }
        console.log(str);
        }
    
    
        console.log('___________');



     //1
     //0 1
     //1 0 1
     //0 1 0 1
     
     for(row=1;row<=4;row++){
        str=''
        for(col=1;col<=row;col++){
            if((row+col)%2==0){
                str=str+' 1'
            }
            else{
                str=str+' 0'
            }
     
        }
        console.log(str);
        }
    
    
        console.log('___________');


//            11
//          12 13 
//       14 15 16 17
//      18 19 20 21 22
//     23 24 25 26 27 28
//    29 30 31 32 33 34 35
num=10
for(row=1;row<=7;row++){
    str=''
    for(spa=4;spa>row;spa--){
    str=str+ ''
}
    for(col=1;col<=row;col++){
    num++
    str=str+'  '+num
    }
    console.log(str);
    }


    console.log('___________');

