// booking-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FormFillData } from '../../model/form-fill-data';
import { DataService } from '../../shared/data.service';
import { FormFillService } from '../../shared/form-fill.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class BookingListComponent implements OnInit {
  formFillList: FormFillData[] = [];

  constructor(private dataService: FormFillService) {}

  ngOnInit(): void {
    this.getAllForms();
  }

  getAllForms() {
    this.dataService.getAllForms().subscribe((res: any[]) => {
      this.formFillList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    }, (err: any) => {
      console.error('Error while fetching form data', err);
    });
  }

  // deleteForm(form: FormFillData) {
  //   if (window.confirm(`Are you sure you want to delete ${form.travel_code} ${form.tourist_spot}?`)) {
  //     this.dataService.formDelete(form);
  //   }
  }

