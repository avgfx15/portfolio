import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerLiginComponent } from './seller-ligin/seller-ligin.component';



@NgModule({
  declarations: [
    SellerSignupComponent,
    SellerLiginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
