import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
