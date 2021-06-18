import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentid="";
  accountdetails:any={
    1000:{userid:1000,username:"userone",password:"userone",eventdetails:[]},
    1001:{userid:1001,username:"usertwo",password:"usertwo",eventdetails:[]},
    1002:{userid:1002,username:"userthree",password:"userthree",eventdetails:[]},
    1003:{userid:1003,username:"userfour",password:"userfour",eventdetails:[]}
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
        password:pswd
      }
      return true;
      

    }
  }
  login(id:any,pswd:any){
    let users=this.accountdetails;
   if(id in users){
     if(pswd==users[id]["password"]){
       this.currentid=id;
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

  save(edate:any,edetails:any){
    if(this.currentid){
      let users=this.accountdetails;
      let uid=this.currentid;
      console.log(uid);
      
      users[uid].eventdetails.push({edate:edate,edetails:edetails})
      console.log(users[uid].eventdetails);
      
      
      return true;
    }
    else{
      return false;
    }
  }
  view(){
    if(this.currentid){
      let users=this.accountdetails;
      let uid=this.currentid;
      console.log(users[uid].eventdetails);
      
      return(users[uid].eventdetails)      
    }
  }

  
}
