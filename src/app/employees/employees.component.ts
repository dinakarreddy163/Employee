import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDialogComponent } from '../common/employee-dialog/employee-dialog.component';
import { Employee } from '../shared/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  employeeData: Employee[] = [{
    empcode: 'E001', empName: 'dinakar', dob: '1997-02-01', doj: '2021-02-10', highestQualification: 'btech', managerCode: 'M001'
  },
  {
    empcode: 'E002', empName: 'Teja', dob: '1996-03-05', doj: '2022-06-07', highestQualification: 'btech', managerCode: 'M001'
  }];
  duplicateData: any;
  displayedColumns = ['employeeCode', 'employeeName', 'dob', 'doj', 'qualification', 'managerCode', 'action'];
  dataSource = new MatTableDataSource<Employee>(this.employeeData);
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.duplicateData = this.employeeData

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog(type: any,data?: any) {
    if (type == 'new') {
      data ={};
    }
    data.type=type;
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe((detail) => {
      if (detail != "") {
        if(detail.type=='edit')
        {
        this.employeeData.forEach(e => {
          if (e.empcode == detail.empcode) {
            e.empName = detail.empName;
            e.dob = detail.dob;
            e.doj = detail.doj;
            e.highestQualification = detail.highestQualification;
            e.managerCode = detail.managerCode;
          }
        });
      } else if(detail.type=='new')
      {
        this.employeeData.push(detail);
      }
        this.dataSource = new MatTableDataSource<Employee>(this.employeeData);

      } else {
        this.dataSource = new MatTableDataSource<Employee>(this.duplicateData);

      }
    });
  }
  deleteDetail(element:any)
  {
   this.employeeData= this.employeeData.filter(e=>e.empcode!=element.empcode);
    this.dataSource = new MatTableDataSource<Employee>(this.employeeData);

  }
}
