import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tablename= "Employee Details";

  public headers=["Sr. No.", "Active Status", "Employee Name", "Employee Id", "Email", "Status","Action"];

  public rows=[
    {
      empNo:"1",
      empAstatus:"Online",
      empName:"Suraj Mate",
      empId:"637694",
      empEmail:"suraj@gmail.com",
      empStatus:"P",
      empAction:""
    },
    {
      empNo:"2",
      empAstatus:"Offline",
      empName:"Priti Paunikar",
      empId:"121245",
      empEmail:"priti@gmail.com",
      empStatus:"P",
      empAction:""
    },
    {
      empNo:"3",
      empAstatus:"Offline",
      empName:"Aditi Kulkarni",
      empId:"997694",
      empEmail:"aditi@gmail.com",
      empStatus:"A",
      empAction:""
    },
    {
      empNo:"4",
      empAstatus:"Online",
      empName:"Durgesh Tarone",
      empId:"127694",
      empEmail:"durgesh@gmail.com",
      empStatus:"A",
      empAction:""
    },
    {
      empNo:"5",
      empAstatus:"Online",
      empName:"Neha Metkar",
      empId:"537994",
      empEmail:"neha@gmail.com",
      empStatus:"P",
      empAction:""
    },
    {
      empNo:"6",
      empAstatus:"Offline",
      empName:"Rani Mohadikar",
      empId:"458534",
      empEmail:"rani@gmail.com",
      empStatus:"P",
      empAction:""
    },
    {
      empNo:"7",
      empAstatus:"Online",
      empName:"Pooja Lanjewar",
      empId:"012291",
      empEmail:"Pooja@gmail.com",
      empStatus:"A",
      empAction:""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  editRow(row: any){
    console.log(row)
  }
  deleteRow(element: any){
    this.rows.forEach((value, index) =>{
      if(value == element)
      this.rows.splice(index,1);
    });
    
  }
}
