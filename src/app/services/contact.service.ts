import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/tab_techno/add'; // Backend API URL for contact page
  // private loginUrl = 'http://localhost:3000/api/tab_adminlogin/add'; // Backend API URL for adminLogin page basic Add value
  private loginUrl = 'http://localhost:3000/api/tab_adminlogin'; // Backend API URL for get adminLogin data from db
  // private emailApiUrl = 'http://localhost:3000/api/send-email'; // Backend API URL for Email


  constructor(private http: HttpClient) {
    // console.log("ContactService Initialized"); // Debugging log
  }

  // Method to send contact data to the backend
  sendContactData(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }

  // Method to send contact data to the backend basic Add value
  validateAdminLogin(adminlogin: any): Observable<any> {
    return this.http.post(this.loginUrl, adminlogin);
  }


}
