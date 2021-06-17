import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
text="Login form";
id="User-Id please";
pswd="";

accountdetails:any={
  1000:{userid:1000,username:"userone",password:"userone",date:10/6/2021,event:"company meeting"},
  1001:{userid:1001,username:"usertwo",password:"usertwo",date:15/6/2021,event:"treat to friends"},
  1002:{userid:1002,username:"userthree",password:"userthree",date:20/7/2021,event:"project submition"},
  1003:{userid:1003,username:"userfour",password:"userfour",date:25/7/2021,event:"interview date"}
}
  constructor(){}
  ngOnInit(): void {
  }

  //idchange(event:any){
  //  this.id=event.target.value;
  //  console.log(this.id);
    
  //}
  //pswdchange(event:any){
  //  this.pswd=event.target.value;
  //  console.log(this.pswd);
    
  //}
 login(){
   var id=this.id;
   
   var pswd=this.pswd;
   let users=this.accountdetails;
   if(id in users){
     if(pswd==users[id]["password"]){
       alert("login success");
     }
     else{
       alert("incorrct password")
     }
   }
   else{
     alert("invalid userid")
   }
 }
  
}
