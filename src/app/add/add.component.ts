import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  edate="";
  edetails="";

  constructor(private router:Router,private dataservice:DataService) { }


  ngOnInit(): void {
  }
  save(){
    var edate=this.edate;
    var edetails=this.edetails;
    const result=this.dataservice.save(edate,edetails)
    if(result){
      alert("event saved");

    }
    else{
      alert("Invalid form");
    }

  }
  view(){
    this.router.navigateByUrl("view");

  }

}
