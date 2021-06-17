import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  date="";
  event="";

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  save(){
    alert("event saved");

  }
  view(){
    this.router.navigateByUrl("view");

  }

}
