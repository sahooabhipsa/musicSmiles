import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarModule { }
