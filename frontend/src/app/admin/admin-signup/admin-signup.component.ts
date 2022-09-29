import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  adminSignup(data: any) {
    console.log(data);
  }
}
