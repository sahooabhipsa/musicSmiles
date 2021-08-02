import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { InstitueLoginComponent } from './institue-login/institue-login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [InstitueLoginComponent],
  imports: [
    CommonModule,
    InstituteRoutingModule
  ],
  exports: [
    InstitueLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstituteModule { }
