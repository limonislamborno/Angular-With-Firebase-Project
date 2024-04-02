import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

  constructor(private dialog: MatDialog, private router: Router) {}
  openLogoutConfirmationDialog() {
    const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // User clicked "Yes" to log out
        // Perform any additional logout logic if needed
        // For now, navigate to the home page
        this.router.navigate(['/']);
      }
    });
  }
  logout() {
    // Perform any additional logout logic if needed
    // For now, navigate to the home page
    this.router.navigate(['/']);
  }

}
