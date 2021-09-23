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
  form?: FormGroup;

  constructor(
    private coursesService: CoursesService,
    private helperService: HelperService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      course_id: new FormControl(
        this.coursesService.getCourses().subscribe(data => {
          this.courses = data;
          this.course_id = this.helperService.generateCodeSequential('CS', this.courses, 'course_id', 3);
        })
        // ''
      , [Validators.required]),
      course_name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    })

  }

  get f() {
    return this.form?.controls;
  }

  submit() {  
    this.coursesService.addCourse(this.form?.value).subscribe(data => 
      console.log(data)
      // this.courses.push(data)
    );
  }
}
