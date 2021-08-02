import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherLoginComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
