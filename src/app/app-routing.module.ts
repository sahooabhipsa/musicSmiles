import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomeModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then( m => m.StudentModule) },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule) },
  { path: 'institute', loadChildren: () => import('./institute/institute.module').then( m => m.InstituteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
