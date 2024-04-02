import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DataService } from '../../shared/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Form } from '../../model/form';
import { MatDialog } from '@angular/material/dialog';
import { DiscountDialogComponent } from '../discount-dialog/discount-dialog.component';
import { AuthService } from '../../shared/auth.service';
import { FormFillData } from '../../model/form-fill-data';
import { FormFillService } from '../../shared/form-fill.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormComponent implements OnInit {

  formFillList: FormFillData[] = [];
  fillObj : FormFillData = {
    id: '',
    full_name: '',
    mobile: '',
    travel_code: '',
   
    tourist_spot: '',
    date: '',
    package_price: '',
    quantity: '',
    total_tk: '',
   
  };
  id: string = '';
  full_name : string= '';
  mobile : string=  '';
  travel_code : string=  '';
  
  tourist_spot : string=  '';
  date : string='';
  package_price : string='';
  quantity : string='';
  total_tk : string='';
  


  





  private unsubscribe$ = new Subject<void>();

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private auth: AuthService,private data: FormFillService,
    private _formBuilder: FormBuilder,
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    this.firstFormGroup = this._formBuilder.group({

      id: ['', Validators.required],
      full_name: ['', Validators.required],
      mobile: ['', Validators.required],
      travel_code: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      tourist_spot: ['', Validators.required],
      package_price: ['', Validators.required],
      date: ['', Validators.required],
      
      quantity: ['', Validators.required],
      total_tk: ['', Validators.required],
      
    });

    this.thirdFormGroup = this._formBuilder.group({
      payment_option: ['', Validators.required],
      account_number: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getAllForms();
    this.firstFormGroup.get('travel_code')?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((travelCode: string | null) => {
        if (travelCode) {
          this.dataService.getFormByTravelCode(travelCode!).subscribe((forms: Form[]) => {
            if (forms && forms.length > 0) {
              this.secondFormGroup.patchValue({
                tourist_spot: forms[0].tourist_spot,
                package_price: forms[0].package_rate,
                date: forms[0].date,
                // Add other fields as needed
              });
            }
          });
        }
      });

    this.secondFormGroup.get('quantity')?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.calculateTotal();
      });
  }


  getAllForms() {

    this.data.getAllForms().subscribe(res => {

      this.formFillList = res.map((e: any) => {
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
    this.full_name = '';
    this.mobile = '';
    this.travel_code = '';
    this.tourist_spot='';
    this.date='';
    this.package_price = '';
    this.quantity = '';
    this.total_tk = '';
  }

  addForm() {
    if (this.full_name == '' || this.mobile == '' || this.travel_code == '' || this.tourist_spot == '' || this.date == '' || this.package_price == '' || this.quantity=='' || this.total_tk=='' ) {
      alert('Fill all input fields');
      return;
    }

    this.fillObj.id = '';
    this.fillObj.full_name = this.full_name;
    this.fillObj.mobile = this.mobile;
    this.fillObj.travel_code = this.travel_code;
    this.fillObj.tourist_spot = this.tourist_spot;
    this.fillObj.date = this.date;

    this.fillObj.package_price = this.package_price;
    this.fillObj.quantity = this.quantity;
    this.fillObj.total_tk = this.total_tk;

    this.data.formAdd(this.fillObj);
    this.resetForm();

  }

  updateForm() {

  }

  deleteForm(form: FormFillData) {
    if (window.confirm('Are you sure you want to delete ' + form.travel_code + ' ' + form.tourist_spot + ' ?')) {
      this.data.formDelete(form);
    }
  }













  calculateTotal() {
    const quantity = this.secondFormGroup.get('quantity')?.value;
    const packagePrice = this.secondFormGroup.get('package_price')?.value;

    let total = quantity * packagePrice;

    // Apply 10% discount if quantity is more than 4
    if (quantity > 4) {
      const discountAmount = total * 0.1;
      total *= 0.9;

      // Display discount message in a dialog
      this.showDiscountDialog(discountAmount);
    }

    this.secondFormGroup.get('total_tk')?.setValue(total);
  }

  showDiscountDialog(discountAmount: number) {
    const dialogRef = this.dialog.open(DiscountDialogComponent, {
      data: { discountAmount },
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
