import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitueLoginComponent } from './institue-login/institue-login.component';

const routes: Routes = [
  {
    path: '',
    component: InstitueLoginComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
