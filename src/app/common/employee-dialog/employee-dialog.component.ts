import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent implements OnInit {
  employee: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<EmployeeDialogComponent>) {
    this.employee = data;
    this.dialogRef.updateSize('300vw', '300vw')
  }
  ngOnInit(): void {
  }
  employeeSubmit() {
    this.dialogRef.close(this.employee);
  }
  onConfirmClick(): void {
    this.dialogRef.close();
  }
  ageCheck()
  {

    let date=new Date(this.employee.dob);
    let dateoj=new Date(this.employee.doj);
    let dateNow=new Date();
    date.setFullYear(dateNow.getFullYear()-date.getFullYear());
    date.setMonth(dateNow.getMonth()-date.getMonth());
    this.employee.age=date.getFullYear();


  }
}
