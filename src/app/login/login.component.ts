import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
text="Login form";
id="User-Id please";
pswd="";


  constructor(private router:Router,private dataservice:DataService){}
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
   const result=this.dataservice.login(id,pswd)
   if(result){
     alert("login success")
     this.router.navigateByUrl("dasboard");
   }
 }
 register(){
   this.router.navigateByUrl("register");
 }
  
}
