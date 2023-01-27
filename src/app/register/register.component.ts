import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //properties

  acno:any;
  pswd:any;
  uname:any;
  userDetails:any;
  constructor(private ds:DataService,private router:Router){}

  ngOnInit(): void {
    
  }
register(){
var acno=this.acno;
var pswd=this.pswd;
var uname=this.uname;
var userDetails=this.ds.userDetails;

const result= this.ds.register(acno,uname,pswd)
if(result){
  alert('register successful')
  this.router.navigateByUrl('');
}
else{
  alert('register failure')
}
}
}
