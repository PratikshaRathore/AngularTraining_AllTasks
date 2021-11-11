
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empObj:any = {};

  emps:any[] = [
  
  ];


  constructor(private activatedRoute: ActivatedRoute,private httpObj:DbService) { }

  ngOnInit(): void {

    let eno = this.activatedRoute.snapshot.params["id"];
   

this.httpObj.getDataById(eno).subscribe((res:any)=>
{
  console.log(res);
  this.empObj=res;
});
}

}