import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {
  public headers=["Member Name", "Email Id", "Status", "Contact Number","Action"];

  public employees=[
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },{
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    },
    {
      empName:"",
      empMail:"",
      empStatus:"",
      empContact:"",
      empAction:""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  editRow(emp: any){
    console.log(emp)
  }
  deleteRow(element: any){
    this.employees.forEach((value, index) =>{
      if(value == element)
      this.employees.splice(index,1);
    });
    
  }

}
