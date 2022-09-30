import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  datasaved = false;
  message: string | any = '';
  msgBack: string = '';
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  adminSignup(data: any) {
    this.adminService.adminSignupService(data).subscribe((response) => {
      console.log(response);
      this.message = response;
      this.datasaved = true;
    });
  }
}
