import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-discount-dialog',
  template: `
    <h1 mat-dialog-title>Discount Applied!</h1>
    <div mat-dialog-content>
      <p>You've received a discount of {{ data.discountAmount | currency }}.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="'close'">Close</button>
    </div>
  `,
})
export class DiscountDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

