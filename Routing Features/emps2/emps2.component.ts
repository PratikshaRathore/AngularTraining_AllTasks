
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emps2',
  templateUrl: './emps2.component.html',
  styleUrls: ['./emps2.component.css']
})
export class Emps2Component implements OnInit {

  public emps:any[]  = [];

  // constructor(private dataService: DataService) { }

  constructor(private route: ActivatedRoute){ }

ngOnInit() {

  this.emps=this.route.snapshot.data['emps'];



}





}