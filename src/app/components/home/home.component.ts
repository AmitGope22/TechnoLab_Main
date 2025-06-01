import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'; // Adjust the path as per your folder structure
import { EmailService } from '../../services/email.service'; // Adjust the path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

// export class HomeComponent implements OnInit{   [--if use heart & user count]*
// user view and heart counts**
  // userCount: number = 50;  // Initial count
  // heartCount: number = 65; // Initial count
  // userClicked: boolean = false;
  // heartClicked: boolean = false;

  // ngOnInit() {

  //   // Retrieve stored counts from Local Storage
  //   this.userCount = Number(localStorage.getItem('userCount')) || 50;
  //   this.heartCount = Number(localStorage.getItem('heartCount')) || 65;
  // }

  // increaseUserCount(): void {
  //   this.userClicked = !this.userClicked;
  //   this.userCount++;
  //   localStorage.setItem('userCount', this.userCount.toString()); // Save count
  // }

  // increaseHeartCount(): void {
  //   this.heartClicked = !this.heartClicked;
  //   this.heartCount++;
  //   localStorage.setItem('heartCount', this.heartCount.toString()); // Save count
  // }
  
//contact details*
  emailData = {
    name: '',
    email: '',
    recipient: '', // Recipient email
    subject: '',
    message: ''

  };

  constructor(private contactService: ContactService, private emailService: EmailService) {}
  
  sendEmail(): void {
    console.log("Contact data before sending:", this.emailData);

    this.contactService.sendContactData(this.emailData).subscribe(
      (response: any) => {
        console.log('Contact data submitted successfully:', response);
        alert('Form submitted successfully! Thank You');

  //page Reload after submit**
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

  //Share Button 
  shareWebsite(): void {
  if (navigator.share) {
    navigator.share({
      title: 'Check this out!',
      text: 'Visit this amazing website:',
      url: window.location.href
    })
    .then(() => console.log('Shared successfully!'))
    .catch((error) => console.error('Error sharing:', error));
  } else {
    alert('Sharing is not supported on this device.');
  }
}


}
