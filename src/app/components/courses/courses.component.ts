import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data
    })
  }

  onDeleteCourse(course: Course) {
    this.courses = this.courses.filter(h => h !== course);
    this.coursesService.deleteCourse(course.id).subscribe();
  }

}
