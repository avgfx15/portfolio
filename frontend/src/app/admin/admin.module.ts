import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [AdminAuthComponent, AdminSignupComponent, AdminLoginComponent],
  imports: [CommonModule, FormsModule],
})
export class AdminModule {}
