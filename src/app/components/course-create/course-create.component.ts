import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  courses: Course[] = [];
  course_id: string = '';

  constructor(
    private coursesService: CoursesService,
    private helperService: HelperService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
      this.course_id = this.helperService.generateCodeSequential('CS', this.courses, 'course_id', 3);
    })
  }
  
  submit(course: Course) {  
    this.coursesService.addCourse(course).subscribe(data => {
      this.courses.push(data);
      this.router.navigateByUrl('courses');
    });
  }
}
