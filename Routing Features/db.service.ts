
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/emps";

  constructor(private httpObj: HttpClient) {

  }

  getData():Observable<any[]>
  {
      return this.httpObj.get<any[]>(this.url);
  }

  getDataById(eno:number) : Observable<any>
  {
   // return this.httpObj.get<any>(this.url + "/" + dno);
    return this.httpObj.get<any>(`${this.url}/${eno}`);
  }

  addData(dataObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, dataObj);
  }

  updateData(dataObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + dataObj.empno, dataObj);
  }

  deleteData(eno:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${eno}`);
  }
}