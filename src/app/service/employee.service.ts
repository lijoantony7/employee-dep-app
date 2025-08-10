import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'https://localhost:44312/api/Employee';

  constructor(private http: HttpClient) { }

  getAllData() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/usingLinq`);
  }

  getFilteredData(filterValue : string, selectedFilter : any){
    return this.http.get<Employee[]>(`${this.url}/FilteredList?filterValue=${filterValue}&selectedFilter=${selectedFilter}`)
  }
}
