import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
  //class is a collection of properties and methods
  constructor() {}//1st executed
         //used for object initialization
         //it automatically invokes when an object is created.

  ngOnInit(): void {  //2nd executed
         //initial process of component
         //when a component is created,at the same time it initialize or authorize
         //when a component is created,there is a lifecycle for it.
  }

  //properties

  aim="Your perfect banking partner"

  acno:any;//to hold the value from the user

  pswd:any;

  account="please enter ur acno"
  userDetails:any={
    1000:{acno:1000,username:"adarsh",password:1000,balance:2000},
    1001:{acno:1001,username:"ajay",password:1001,balance:2000},
    1002:{acno:1002,username:"vimal",password:1002,balance:2000},
  }
  //userdefined functions//4th executed
  logIn(){
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login successful')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user not found')
    }
  }
  acnoChange(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswdchange(event:any){
    // console.log(event.target.value);
    this.pswd = event.target.value;
    console.log(this.pswd);
    
  }
}
