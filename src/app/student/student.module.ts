import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRegisterComponent } from './student-register/student-register.component';

@NgModule({
  declarations: [StudentComponent, StudentLoginComponent, StudentRegisterComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentComponent,
    StudentLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentModule { }
