import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../service/contactus.service';
import { Contactusmodel } from '../model/contactus.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  AllContactUsMessage: Contactusmodel[] | any = [];

  datasaved = false;
  message: string = '';
  constructor(private contactUsService: ContactusService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    console.log(this.contactUsService);

    this.contactUsService
      .getContactUsMessage()
      .subscribe(
        (AllContactUsMessage) =>
          (this.AllContactUsMessage = AllContactUsMessage)
      );
  }

  submitContactUsForm(data: any) {
    this.contactUsService
      .postContactUsMessage(data)
      .subscribe((response) => {});
    this.datasaved = true;
    this.message = 'Contact Us Message Sent';
  }
}
