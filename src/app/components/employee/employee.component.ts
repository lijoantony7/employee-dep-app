import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee, RoleTypeEnum } from '../../model/employee.model';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {

  data: Employee[] = [];
  roles: string[] = [];
  searchStr: any = "";
  selectedFilter: string = 'name';
  selectedRole: string = 'All';

  constructor(private employeeService: EmployeeService){
   this.getAllData();
  }


  ngOnInit() {
    this.roles = Object.values(RoleTypeEnum);
  }

  getAllData(){
     this.employeeService.getAllData().subscribe(
      res => {
        this.data = res;
        console.log("data", res);
      }
    );
  }

  search(){
    this.searchStr = this.searchStr?.toString().trim();
    this.employeeService.getFilteredData(this.searchStr, this.selectedFilter).subscribe(
      res => {
        this.data = res;
        console.log("fil", res);
        
      }
    )
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
  
  setRoleFilter(roleFilter: string){
    this.selectedRole = roleFilter;
    this.searchStr = roleFilter;
  }

  clearFilter(){
    this.selectedFilter = 'name';
    this.selectedRole = 'All';
    this.search();
  }

  getRoles(): string[] {
    return this.roles;
  }
}