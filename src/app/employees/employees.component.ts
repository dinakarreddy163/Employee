import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDialogComponent } from '../common/employee-dialog/employee-dialog.component';
import { Employee } from '../shared/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  employeeData: Employee[] = [{
    empcode: 'E001', empName: 'dinakar', dob: '10-01-1997', doj: '10-09-2021', highestQualification: 'btech', managerCode: 'M001'
  },
  {
    empcode: 'E001', empName: 'dinakar', dob: '10-01-1997', doj: '10-09-2021', highestQualification: 'btech', managerCode: 'M001'
  }];

  displayedColumns = ['employeeCode', 'employeeName', 'dob', 'doj', 'qualification', 'managerCode', 'action'];
  dataSource = new MatTableDataSource<Employee>(this.employeeData);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(data: any, type: any) {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

    });
  }

}
