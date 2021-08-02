import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  {
    path: '',
    component: StudentLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: StudentRegisterComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
