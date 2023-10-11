class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"username",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000},
    }
    //method to validate the given account number
    validateAccount(acno){
        return acno in this.accountDetails?true:false
    }
    authenticateAccount(acno,pswd){
        if(this.accountDetails[acno].password==pswd){
            console.log('authentication successful');
        }
        else{
            console.log('invalid password');
        }
    }
    //---------------------------------------------------
    getbalance(acno,pswd){
  if(this.validateAccount(acno)){
    if(this.accountDetails[acno].password==pswd){
        console.log('current balance account number ${acno} is ${this.accountDetsild[acno].balance}');
    }
    else{
        console.log('invalid password');
    }
  }
  else{
    console.log('invalid account');
  }
    }
    fundtransfer(fromacno,toacno,amount){
        if(this.validateAccount(fromacno)&&this.validateAccount(toacno)){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(`initial balance of ${fromacno} is ${this.accountDetails[fromacno].balance}\n initial balance of ${toacno
                } is ${this.accountDetails[toacno].balance}`);
                console.log(`amount `);
            }
        }
    }
}
const user1=new Bank()
console.log(user1.validateAccount(1000)?'valid account':'invalid account');
console.log('____________________');

console.log(user1.authenticateAccount(1000,'username'))
console.log('__________________');
console.log(user1.getbalance(1000,'username'))



//method to autenticate the given account



//method o check the balance of the account

//method for fund tranfer between two accounts

// checkacno(a,b,x,y,t){


//     console.log(a in this.accountDetails && x in this.accountDetails?this.accountDetails[a].password==b && this.accountDetails[x].password==y?`BALANCE OF ACNO ${a}: ${this.accountDetails[a].balance} \n BALANCE OF ACNO ${a}: ${this.accountDetails[x].balance} \n AFTER TRANSACTION \n ${t}$ TRANSFER FROM ${a} TO ${x} \n BALANCE OF ${x} ${this.accountDetails[x].balance+=t} \n BALANCE OF ${a} ${this.accountDetails[a].balance-=t}`:"WRONG PASSWORD":"INVALID");
    
    
//     }
    
//     }
//     const u1=new Bank()
    
//     u1.checkacno(1001,"usertwo",1000,"userone",100)