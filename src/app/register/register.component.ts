import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  id="";
  pswd="";

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname;
    var id=this.id;
    var pswd=this.pswd;

    const result=this.dataservice.register(uname,id,pswd)
    if(result){
      alert("register successful");
      this.router.navigateByUrl("");

    }
    else{
      alert("user exist,please login");
    }
  }

}
