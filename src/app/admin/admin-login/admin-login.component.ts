import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminlogin = {
    username: '',
    password: ''
  }

  constructor(private contactService: ContactService, private router: Router) {} // Inject Router
  
  submit(): void {
       // console.log("Contact data before sending:", this.contactData); // Debugging log
       this.contactService.validateAdminLogin(this.adminlogin).subscribe(
        (response: any) => {
          if (response.status) {
            console.log('Login successful:', response);
            alert('Login successful! Welcome, Admin.');
            this.router.navigate(['/courses']); // Navigate to '/courses'
          } else {
            alert('Invalid username or password.');
          }
        },
        (error: any) => {
          console.error('Error submitting login data:', error);
          alert('Login failed! Please try again.');
        }
      );
  }
}

