
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { FileMetaData } from '../model/file-meta-data';
import { Observable } from 'rxjs';
import { EmployeeData } from '../model/employee-data';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }
  // add student
  formAdd(employeeData : EmployeeData) {
    employeeData.id = this.afs.createId();
    return this.afs.collection('/Employee').add(employeeData);
  }

// get all students
getAllForms() {
  return this.afs.collection('/Employee').snapshotChanges();
}

 // delete student
 formDelete(employeeData: EmployeeData) {
  this.afs.doc('/Employee/' + employeeData.id).delete();
}

// update student
formUpdate(employeeData: EmployeeData) {
  this.formDelete(employeeData);
  this.formAdd(employeeData);
}
// ormByTravelCode(travelCode: string): Observable<EmployeeData[]> {
// //  return this.afs.collection<EmployeeData>('Packages', ref => ref.where('travel_code', '==', travelCode)).valueChanges();
// // }


}
