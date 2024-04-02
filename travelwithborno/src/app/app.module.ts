import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './component/home/home.component';
import { StudentPackageComponent } from './component/student-package/student-package.component';
import { RelaxPackageComponent } from './component/relax-package/relax-package.component';
import { ForeignPackageComponent } from './component/foreign-package/foreign-package.component';
import { PackageComponent } from './component/package/package.component';
import { FormComponent } from './component/form/form.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { Home2Component } from './component/home2/home2.component';
import { LogoutConfirmationDialogComponent } from './component/logout-confirmation-dialog/logout-confirmation-dialog.component';
// import { FormsModule } from '@angular/forms';


import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddPackageComponent } from './component/add-package/add-package.component';
import { DiscountDialogComponent } from './component/discount-dialog/discount-dialog.component';
import { FooterComponent } from './component/footer/footer.component';
import { MeetUssComponent } from './component/meet-uss/meet-uss.component';
import { ReviewComponent } from './component/review/review.component';
import { ContactComponent } from './component/contact/contact.component';
import { EmployeeManagementComponent } from './component/employee-management/employee-management.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookingListComponent } from './component/booking-list/booking-list.component';
import { ContentComponent } from './component/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // DashboardComponent,
    VerifyEmailComponent,
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    HomeComponent,
    StudentPackageComponent,
    RelaxPackageComponent,
    ForeignPackageComponent,
    PackageComponent,
    FormComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    Home2Component,
    LogoutConfirmationDialogComponent,
    AddPackageComponent,
    DiscountDialogComponent,
    FooterComponent,
    MeetUssComponent,
    ReviewComponent,
    ContactComponent,
    EmployeeManagementComponent,
    DashboardComponent,
    BookingListComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,MatDialogModule,MatButtonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}