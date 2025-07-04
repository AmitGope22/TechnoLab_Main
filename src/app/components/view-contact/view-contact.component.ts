import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  viewcontactArray: any[] = [];
  filteredviewcontact: any[] = [];

  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  constructor(private http: HttpClient) {
    this.getAllviewContact();
  }

  ngOnInit(): void {}

  // ✅ Export to Excel
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.viewcontactArray);
    const workbook: XLSX.WorkBook = { Sheets: { 'Contact Data': worksheet }, SheetNames: ['Contact Data'] };
    XLSX.writeFile(workbook, 'View_Contact.xlsx');
  }

  // ✅ Fetch all contacts
  getAllviewContact() {
    this.http.get("http://localhost:3000/api/tab_techno/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.viewcontactArray = resultData.data;
      });
  }

  // ✅ Delete contact
  setDelete(data: any) {
    this.http.delete("http://localhost:3000/api/tab_techno/delete/" + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Registration Deleted Successfully");
        this.getAllviewContact();
      });
  }

  // Placeholder for submit
  submit() {
    throw new Error('Method not implemented.');
  }

  // Placeholder for register
  register() {
    let bodyData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    // You can implement POST logic here if needed
  }
}
