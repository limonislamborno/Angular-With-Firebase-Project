import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

import { EmployeeData } from '../../model/employee-data';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent implements OnInit{
  employeeList: EmployeeData[] = [];
  empObj : EmployeeData = {
    id: '',
    employee_name: '',
    gender: '',
    address: '',
    mobile: '',
    designation: ''
  };
  id: string = '';
  employee_name : string= '';
  gender : string=  '';
  designation : string=  '';
  
  address : string=  '';
  mobile : string='';


  constructor(private auth: AuthService, private data: EmployeeService) { }

  ngOnInit(): void {
    this.getAllForms();
  }

  // register() {
  //   this.auth.logout();
  // }

  getAllForms() {

    this.data.getAllForms().subscribe(res => {

      this.employeeList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.employee_name = '';
    this.gender = '';
    this.designation = '';
    this.address='';
    this.mobile='';
   
  }

  addForm() {
    if (this.employee_name == '' || this.gender == '' || this.designation == '' || this.address == '' || this.mobile == ''  ) {
      alert('Fill all input fields');
      return;
    }

    this.empObj.id = '';
    this.empObj.employee_name = this.employee_name;
    this.empObj.gender = this.gender;
    this.empObj.designation = this.designation;
    this.empObj.address = this.address;
    this.empObj.mobile = this.mobile;

  

    this.data.formAdd(this.empObj);
    this.resetForm();

  }
  

  updateForm() {

  }

  deleteForm(employeeData: EmployeeData) {
    if (window.confirm('Are you sure you want to delete ' + employeeData.employee_name + ' ' + employeeData.id + ' ?')) {
      this.data.formDelete(employeeData);
    }
  }
  

}












