class Landing{
    //properties
    dataBase={
        "Manu":{username:"Manu",passsword:"manu123"},
        "Raj":{username:"Ravi",passsword:"Ravi123"},
        "dude":{username:"lude",passsword:"lude123"}
        
    }
    //methods
    // local storage
    saveData(){
        if(this.dataBase){localStorage.setItem('dataBase',JSON.stringify(this.dataBase))
}    }
//getdata
getData(){
    this.dataBase=JSON.parse(localStorage.getItem("dataBase"))
}

//register
    register(){
        let usernm =usernm1.value
        console.log(usernm);
        let passwd=pass.value
        console.log(passwd);
        // this.getData()
        if (usernm==""||passwd=="") {
            alert('please enter a valid input')
            
        }
        else{
            if (usernm in this.dataBase) {
                alert('user already exist')
                register.value=""
                register.value=""
            }
            else{
                this.dataBase[usernm]={username:usernm,passsword:passwd}
                console.log(this.dataBase);
                this.saveData()
                alert("Registration successful")
                window.location="login.html"
            }
        }

    }

    // login
    login(){
        let uname1=lognm.value
        console.log(uname1);
        let passw1=logpw.value
        console.log(passw1);
        this.getData()
        if (uname1 in this.dataBase) {
            if (this.dataBase[uname1].passsword==passw1) {
                alert('login successfull')
                //stroe username in locstorage
                localStorage.setItem("user",uname1);
                //navigation
                window.location="home.html"

                
            }
            else{
                alert('invalid username or password')
            }
            
        }
        else{
            alert('user doesnot exist')
        }
    }

}
const obj = new Landing()
obj.getData()