import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';




import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl ="http://localhost:86/api/v1/employees";


  constructor(private httpClient :HttpClient) { }


  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);}
  
   createEmployee(employee: Employee): Observable<Object>{
     return this.httpClient.post(`${this.baseUrl}`,employee);
   }
  
   getEmployeeID(id :number): Observable<Employee>{
     return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
   }
    updateEmployee(id : number,employee:Employee):Observable<Object>{
      return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee);
    }
    deleteEmployee(id :number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}
