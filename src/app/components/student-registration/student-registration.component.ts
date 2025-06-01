import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  submit() {
  throw new Error('Method not implemented.');
  }
  
    RegistrationArray : any[] = [];
    isResultLoaded = false;
    isUpdateFormActive = false;
  
  
    firstName: string ="";
    middleName: string ="";
    lastName: string ="";
    parentFirstName: string ="";
    parentMiddleName: string ="";
    parentLastName: string ="";
    email: string ="";
    phone: string ="";
    dob: string ="";
    gender: string ="";
    country: string ="";
    presentAddress: string ="";
    permanentAddress: string ="";
    state: string ="";
    city: string ="";
    pin: string ="";
    qualification: string ="";
    year: string ="";
    subject: string ="";
    coursetype: string ="";
    message: string ="";
    CurrentRegistrationID = "";
  
  constructor(private http: HttpClient )
  {
    this.getAllRegistration();
  }
  
  ngOnInit(): void {
  }
  
  getAllRegistration()
  {
    this.http.get("http://localhost:8085/api/registration/")
    .subscribe((resultData: any)=>
    {
      this.isResultLoaded = true;
      console.log(resultData.data);
      this.RegistrationArray = resultData.data;
    });
  }
  
  register()
  {
    let bodyData = {
      "firstName" : this.firstName,
      "middleName" : this.middleName,
      "lastName" : this.lastName,
      "parentFirstName" : this.parentFirstName,
      "parentMiddleName" : this.parentMiddleName,
      "parentLastName" : this.parentLastName,
      "email" : this.email,
      "phone" : this.phone,
      "dob" : this.dob,
      "gender" : this.gender,
      "country" : this.country,
      "presentAddress" : this.presentAddress,
      "permanentAddress" : this.permanentAddress,
      "state" : this.state,
      "city" : this.city,
      "pin" : this.pin,
      "qualification" : this.qualification,
      "year" : this.year,
      "subject" : this.subject,
      "coursetype" : this.coursetype,
      "message" : this.message
  
    };
  
    this.http.post("http://localhost:8085/api/registration/add/", bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Register Successfuly")
      this.getAllRegistration();
    });
  }
  
   setUpdate(data: any) 
    {
     this.firstName = data.firstName;
     this.middleName = data.middleName;
     this.lastName = data.lastName;
     this.parentFirstName = data.parentFirstName;
     this.parentMiddleName = data.parentMiddleName;
     this.parentLastName = data.parentLastName;
     this.email = data.email;
     this.phone = data.phone;
     this.dob = data.dob;
     this.gender = data.gender;
     this.country = data.country;
     this.presentAddress = data.presentAddress;
     this.permanentAddress = data.permanentAddress;
     this.state = data.state;
     this.city = data.city;
     this.pin = data.pin;
     this.qualification = data.qualification;
     this.year = data.year;
     this.subject = data.subject;
     this.coursetype = data.coursetype;
     this.message = data.message;
     
  
    
     this.CurrentRegistrationID = data.id;
   
    }
    UpdateRecords()
    {
      let bodyData = 
      {
      "firstName" : this.firstName,
      "middleName" : this.middleName,
      "lastName" : this.lastName,
      "parentFirstName" : this.parentFirstName,
      "parentMiddleName" : this.parentMiddleName,
      "parentLastName" : this.parentLastName,
      "email" : this.email,
      "phone" : this.phone,
      "dob" : this.dob,
      "gender" : this.gender,
      "country" : this.country,
      "presentAddress" : this.presentAddress,
      "permanentAddress" : this.permanentAddress,
      "state" : this.state,
      "city" : this.city,
      "pin" : this.pin,
      "qualification" : this.qualification,
      "year" : this.year,
      "subject" : this.subject,
      "coursetype" : this.coursetype,
      "message" : this.message
      };
      
      this.http.put("http://localhost:8085/api/registration/update"+ "/"+ this.CurrentRegistrationID,bodyData).subscribe((resultData: any)=>
      {
          console.log(resultData);
          alert("Student Registration Updated Successfully")
          this.getAllRegistration();
        
      });
    }
  
      save()
    {
      if(this.CurrentRegistrationID == '')
      {
          this.register();
      }
        else
        {
         this.UpdateRecords();
        }       
    }
    setDelete(data: any)
    {
      this.http.delete("http://localhost:8085/api/registration/delete"+ "/"+ data.id).subscribe((resultData: any)=>
      {
          console.log(resultData);
          alert("Registration Deleted Successfully")
          this.getAllRegistration();
      });
    } 
}
