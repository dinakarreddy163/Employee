import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent implements OnInit {
   employeeData:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: Employee,
    private dialogRef: MatDialogRef<EmployeeDialogComponent>) {
  console.log(data)
  this.employeeData=data;
    this.dialogRef.updateSize('300vw','300vw')
  }
  ngOnInit(): void {
  }
  employeeSubmit()
  {
    console.log(this.employeeData);
  }
}
