import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../service/contactus.service';
import { Contactusmodel } from '../model/contactus.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  AllContactUsMessage: Contactusmodel[] | any = [];
  constructor(
    private contactUsService: ContactusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.contactUsService
      .getContactUsMessage()
      .subscribe(
        (AllContactUsMessage) =>
          (this.AllContactUsMessage = AllContactUsMessage)
      );
  }

  submitContactUsForm(data: any) {
    console.log(data);
  }
}
