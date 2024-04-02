import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  fullName: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    // Handle form submission logic here, e.g., send data to a backend service
    console.log('Form submitted:', this.fullName, this.email, this.message);
    // You can add more logic here, like sending data to a backend service
  }
}
