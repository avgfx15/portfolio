import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root',
})
export class ContactusService {
  constructor(private webService: WebserviceService) {}

  getContactUsMessage() {
    // return this.httpClient.get('http://localhost:3000/contactus');
    return this.webService.get('contactus');
  }
}
