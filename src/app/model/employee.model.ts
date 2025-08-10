export class Employee {
    name = "";
    experience = 0;
    role = RoleTypeEnum;
    allowedVocation = false;
    department = new Department();
}

export class Department
{
    departmentId = 0;
    departmentType = DepartmentEnum;
    isActive = false;
}

// role-type.enum.ts
export enum RoleTypeEnum {
  Developer = 'Developer',
  Tester = 'Tester',
  Manager = 'Manager',
  HR = 'HR',
  Admin = 'Admin',
  All = 'All'
}

// department.enum.ts
export enum DepartmentEnum {
  IT = 'IT',
  HR = 'HR',
  Finance = 'Finance',
  Sales = 'Sales',
  Marketing = 'Marketing'
}
