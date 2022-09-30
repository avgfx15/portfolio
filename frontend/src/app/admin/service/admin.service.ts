import { Injectable } from '@angular/core';
import { WebserviceService } from 'src/app/service/webservice.service';
import { AdminSignupModel } from '../model/admin-signup-model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private webService: WebserviceService) {}

  adminSignupService(adminSignupData: AdminSignupModel) {
    console.log(adminSignupData);
    return this.webService.post('signup', adminSignupData);
  }
}
