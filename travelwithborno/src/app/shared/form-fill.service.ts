import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { FormFillData } from '../model/form-fill-data';



@Injectable({
  providedIn: 'root'
})
export class FormFillService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add
  formAdd(form : FormFillData) {
    form.id = this.afs.createId();
    return this.afs.collection('/Booking').add(form);
    alert('Submit Done');
  }

  // get all
  getAllForms() {
    return this.afs.collection('/Booking').snapshotChanges();
  }

  // delete
  formDelete(form : FormFillData) {
     this.afs.doc('/Booking/'+form.id).delete();
  }

  // update student
  formUpdate(form : FormFillData) {
    this.formDelete(form);
    this.formAdd(form);
  }
  getFormByTravelCode(travelCode: string): Observable<FormFillData[]> {
    return this.afs.collection<FormFillData>('Booking', ref => ref.where('travel_code', '==', travelCode)).valueChanges();
  }

}
