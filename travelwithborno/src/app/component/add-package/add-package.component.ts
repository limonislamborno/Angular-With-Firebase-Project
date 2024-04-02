import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { DataService } from '../../shared/data.service';

import { Form } from '../../model/form';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css'
})
export class AddPackageComponent implements OnInit {
  formList: Form[] = [];
  formObj: Form = {
    id: '',
    travel_code : '',
    tourist_spot : '',
    package_rate : '',
    total_seat: '',
    date : '',
    admin : '',
    moderator1 : '',
    moderator2 : '',
  };
  id: string = '';
  travel_code : string= '';
  tourist_spot : string=  '';
  package_rate : string=  '';
  total_seat : string='';
  date :string='';
  admin : string=  '';
  moderator1 : string=  '';
  moderator2 : string=  '';

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.getAllForms();
  }

  // register() {
  //   this.auth.logout();
  // }

  getAllForms() {

    this.data.getAllForms().subscribe(res => {

      this.formList = res.map((e: any) => {
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
    this.travel_code = '';
    this.tourist_spot = '';
    this.package_rate = '';
    this.total_seat='';
    this.date='';
    this.admin = '';
    this.moderator1 = '';
    this.moderator2 = '';
  }

  addForm() {
    if (this.travel_code == '' || this.tourist_spot == '' || this.package_rate == '' || this.total_seat == '' || this.date == '' || this.admin == '' || this.moderator1=='' || this.moderator2=='' ) {
      alert('Fill all input fields');
      return;
    }

    this.formObj.id = '';
    this.formObj.travel_code = this.travel_code;
    this.formObj.tourist_spot = this.tourist_spot;
    this.formObj.package_rate = this.package_rate;
    this.formObj.total_seat = this.total_seat;
    this.formObj.date = this.date;

    this.formObj.admin = this.admin;
    this.formObj.moderator1 = this.moderator1;
    this.formObj.moderator2 = this.moderator2;

    this.data.formAdd(this.formObj);
    this.resetForm();

  }

  updateForm() {

  }

  deleteForm(form: Form) {
    if (window.confirm('Are you sure you want to delete ' + form.travel_code + ' ' + form.tourist_spot + ' ?')) {
      this.data.formDelete(form);
    }
  }

}


