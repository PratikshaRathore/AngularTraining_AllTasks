import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

 url:string  = "http://localhost:3000/emps";

  public empsArray:any[] = [];


  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }


  getEmps_click()
  {
    this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
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

    this.httpObj.post<any>(this.url,  empObj).subscribe( (response:any) =>{
      console.log("New Emp details are added to server.");
      alert("New Emp details are added to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });
  }

  removeEmp_click(eno:number)
  {
    this.httpObj.delete<any>(this.url + "/" + eno).subscribe( (response:any) =>{
      console.log("Requested Emp details are deleted from  server.");
      alert("Requested Emp details are deleted from  server.");
      this.getEmps_click();  // to get all the updated results
    });
  }


  selectEmp_click(eno:number)
  {
    this.httpObj.get<any>(this.url + "/" + eno).subscribe( (response:any) =>{

      let empObj:Emps = new Emps();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;
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

    this.httpObj.put<any>(this.url + "/" +   empObj.empno,   empObj).subscribe( (response:any) =>{
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


