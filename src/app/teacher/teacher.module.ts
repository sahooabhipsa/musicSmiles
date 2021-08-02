import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [TeacherComponent, TeacherLoginComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports: [
    TeacherLoginComponent,
    TeacherComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeacherModule { }
