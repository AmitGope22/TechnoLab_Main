import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service'; // Adjust the path as per your folder structure
import { EmailService } from '../../services/email.service'; // Adjust the path



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Initializing contact form data
  emailData = {
    name: '',
    email: '',
    recipient: '', // Recipient email
    subject: '',
    message: ''
  };

  // Injecting the ContactService into the component
  constructor(private contactService: ContactService, private emailService: EmailService) {}

  // Submit method to send contact data
//   sendEmail(): void {
//     // console.log("Contact data before sending:", this.contactData); // Debugging log
//     this.contactService.sendContactData(this.emailData).subscribe(
//       (response: any) => {
//         console.log('Contact data submitted successfully:', response);
//         alert('Form submitted successfully! Thank You');
//       },
//       (error: any) => {
//         console.error('Error submitting contact data:', error);
//         alert('An error occured while submitting the form. Please try again');
//       }
//     );

// //Configure Email service
//     this.emailService.sendEmail(this.emailData).subscribe(
//       (response: any) => {
//         if (response.status) {
//           alert('Email sent successfully!');
//         } else {
//           alert('Failed to send email.');
//         }
//       },
//       (error: any) => {
//         console.error('Error sending email:', error);
//         alert('Error while sending email.');
//       }
//     );
//   }

sendEmail(): void {
  console.log("Contact data before sending:", this.emailData);

  this.contactService.sendContactData(this.emailData).subscribe(
    (response: any) => {
      console.log('Contact data submitted successfully:', response);
      alert('Form submitted successfully! Thank You');

      window.location.reload();

      // Send Email Only After Contact Submission
      this.emailService.sendEmail(this.emailData).subscribe(
        (emailResponse: any) => {
          if (emailResponse.status) {
            alert('Email sent successfully!');
          } else {
            alert('Failed to send email.');
          }
        },
        (emailError: any) => {
          console.error('Error sending email:', emailError);
          alert('Error while sending email.');
        }
      );
    },
    (error: any) => {
      console.error('Error submitting contact data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  );
}
  
}
