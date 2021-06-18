import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  results="";
  constructor(private dataservice:DataService,private router:Router) { 
    this.results=this.dataservice.view();
  }

  ngOnInit(): void {
  }

}
