

import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {

 empno: number  = 0;
 ename  :string  = "";
 job  :string  = "";
 sal  :number  = 0;
 deptno  :number  = 0;
 isDisabled :boolean = false;



  public empsArray:any[] = [];


  constructor(private dbservice: DbService) { }

  ngOnInit(): void {
  }


  getEmps_click()
  {
    this.dbservice.getData().subscribe( (response:any[]) =>{
          this.empsArray = response;
    });

  }


  addEmp_click()
  {
    let empObj:Emps = new Emps();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;


      this.dbservice.addData(empObj).subscribe( (response:any) =>{
        console.log("New Emp details are added to server.");
        alert("New Emp details are added to server.");
        this.clearFields();
        this.getEmps_click();  // to get all the updated results
    });
  }

  removeEmp_click(eno:number)
  {
  
      this.dbservice.deleteData(eno).subscribe( (response:any) =>{
        console.log("Requested Emp details are deleted from  server.");
        alert("Requested Emp details are deleted from  server.");
        this.getEmps_click();  // to get all the updated results
    });
  }


  selectEmp_click(eno:number)
  {
    this.dbservice.getDataById(eno).subscribe( (response:any) =>{
      let empObj = response;
      this.empno =   empObj.empno;
      this.ename =   empObj.ename;
      this.job 		=  empObj.job;
      this.sal 		=  empObj.sal;
      this.deptno		=  empObj.deptno;
      this.isDisabled = true;
    });

  }

  updateEmp_click()
  {
    
    let empObj:Emps = new Emps();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;
    
    this.dbservice.updateData(empObj).subscribe( (response:any) =>{
      console.log("Requested Emp details are updated to server.");
      alert("Requested Emp details are updated to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });

  }

  clearFields()
  {
      this.isDisabled = false;
      this.empno = 0;
      this.ename  = "";
      this.job  = "";
      this.sal  = 0;
      this.deptno  =0 ;
  }



}


class Emps
{
  empno  : number = 0;
  ename  : string  = "";
  job:string="";
  sal  : number  = 0;
  deptno:number=0;
}
