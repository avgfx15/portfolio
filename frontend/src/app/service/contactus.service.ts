import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';
import { Contactusmodel } from '../model/contactus.model';

@Injectable({
  providedIn: 'root',
})
export class ContactusService {
  constructor(private webService: WebserviceService) {}

  getContactUsMessage() {
    return this.webService.get('contactus');
  }
  postContactUsMessage(contactUsData: Contactusmodel) {
    return this.webService.post('contactus', contactUsData);
  }
}
