import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './EmployeeComponent/create-employee/create-employee.component';
import { EmployeeDashboardComponent } from './EmployeeComponent/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: "create", component: CreateEmployeeComponent },
  { path: "create/:id", component: CreateEmployeeComponent },
  { path: "", component: EmployeeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }