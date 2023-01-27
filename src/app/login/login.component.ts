import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
  //class is a collection of properties and methods
  constructor(private router:Router,private ds:DataService) {}//1st executed
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
  
  //userdefined functions//4th executed
  // logIn(a:any,p:any){
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login successful')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert('user not found')
  //   }
  // }

  login(){
    var acno=this.acno;
    var pswd=this.pswd;
   var userDetails=this.ds.userDetails
    const result=this.ds.login(acno,pswd)
    if(result){
      alert('Login successful')
      this.router.navigateByUrl('dashboard')
    }
    else{
     alert('Login failure')
    }
  // acnoChange(event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value;
  //   console.log(this.acno);
    
  // }
  // pswdchange(event:any){
  //   // console.log(event.target.value);
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
    
  // }
  }
}
