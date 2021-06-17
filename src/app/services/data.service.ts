import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails:any={
    1000:{userid:1000,username:"userone",password:"userone",date:10/6/2021,event:"company meeting"},
    1001:{userid:1001,username:"usertwo",password:"usertwo",date:15/6/2021,event:"treat to friends"},
    1002:{userid:1002,username:"userthree",password:"userthree",date:20/7/2021,event:"project submition"},
    1003:{userid:1003,username:"userfour",password:"userfour",date:25/7/2021,event:"interview date"}
  }

  constructor() { }
  register(uname:any,id:any,pswd:any){
    let user=this.accountdetails;
    if(id in user){
      return false;

    }else{
      user[id]={
        userid:id,
        username:uname,
        password:pswd,
        date:0,
        event:""
      }
      return true;
      

    }
  }
  login(id:any,pswd:any){
    let users=this.accountdetails;
   if(id in users){
     if(pswd==users[id]["password"]){
       return true;
     }
     else{
       alert("incorrect password");
       return false;
     }
   }
   else{
     alert("invalid account");
     return false;
   }
  }
}
