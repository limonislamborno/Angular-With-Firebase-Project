import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  showEmployeeContent = false;
  showPackageContent = false;

  showEmployee() {
    this.showEmployeeContent = true;
    this.showPackageContent = false;
  }

  showPackage() {
    this.showEmployeeContent = false;
    this.showPackageContent = true;
  }
}
