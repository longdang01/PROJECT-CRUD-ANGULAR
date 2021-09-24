import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseUpdateComponent } from './components/course-update/course-update.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', component: CoursesComponent},
  { path: 'course-detail/:id', component: CourseDetailComponent},
  { path: 'course-create', component: CourseCreateComponent},
  { path: 'course-update/:id', component: CourseUpdateComponent},
  // { path: 'course/:keyword', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
