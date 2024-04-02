import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
// import { VarifyEmailComponent } from './component/verify-email/verify-email.component';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';
import { Home2Component } from './component/home2/home2.component';
import { AddPackageComponent } from './component/add-package/add-package.component';
import { EmployeeManagementComponent } from './component/employee-management/employee-management.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { BookingListComponent } from './component/booking-list/booking-list.component';
import { ForeignPackageComponent } from './component/foreign-package/foreign-package.component';
import { StudentPackageComponent } from './component/student-package/student-package.component';
import { RelaxPackageComponent } from './component/relax-package/relax-package.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  //  {path: '', redirectTo:'file-upload', pathMatch:'full'},
  {path: 'login', component : LoginComponent},

  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  // {path : 'file-upload', component:FileuploadComponent},
  { path: 'form', component: FormComponent},
  {path: 'home2', component: Home2Component},
  {path:'addpackage' , component:AddPackageComponent},
  {path: 'addemployee' , component: EmployeeManagementComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'admin' , component: LoginComponent},
  {path: 'bookinglist' , component: BookingListComponent},
  {path: 'foreignp' , component: ForeignPackageComponent},
  {path: 'studentp' , component: StudentPackageComponent},
  {path: 'relaxp' , component: RelaxPackageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
