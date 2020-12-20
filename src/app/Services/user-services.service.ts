import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }
  getEmployeesList(){
    console.log("in service")
    // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
    return this.http.get('http://localhost:8080/employeepayrollservice');
  }

  deleteEmployee(id:number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete('http://localhost:8080/employeepayrollservice/'+id);
  }

  createEmployee(data:any){
    console.log("in the service",data);
    return this.http.post('http://localhost:8080/employeepayrollservice/',data);

  }

  getEmployee(id:number){
    return this.http.get('http://localhost:8080/employeepayrollservice/'+id);
  }
  
  updateEmployee(id,data){
    return this.http.put('http://localhost:8080/employeepayrollservice/'+id,data);
  }
}