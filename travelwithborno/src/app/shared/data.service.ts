import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { FileMetaData } from '../model/file-meta-data';
import { Observable } from 'rxjs';
import { Form } from '../model/form';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  formAdd(form : Form) {
    form.id = this.afs.createId();
    return this.afs.collection('/Packages').add(form);
  }

  // get all students
  getAllForms() {
    return this.afs.collection('/Packages').snapshotChanges();
  }

  // delete student
  formDelete(form : Form) {
     this.afs.doc('/Packages/'+form.id).delete();
  }

  // update student
  formUpdate(form : Form) {
    this.formDelete(form);
    this.formAdd(form);
  }
  getFormByTravelCode(travelCode: string): Observable<Form[]> {
    return this.afs.collection<Form>('Packages', ref => ref.where('travel_code', '==', travelCode)).valueChanges();
  }
    
}