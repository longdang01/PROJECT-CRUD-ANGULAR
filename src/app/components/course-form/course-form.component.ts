import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courses: Course[] = [];
  @Input() course_id: string = '';
  @Input() course?: Course;
  @Output() onSubmit: EventEmitter<Course> = new EventEmitter();  
  form?: FormGroup;
  course_name?: string;
  author?: string;
  description?: string;
  price?: number;

  constructor(
    private coursesService: CoursesService,
    private helperService: HelperService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      course_id: new FormControl(
        ''
      , [Validators.required]),
      course_name: new FormControl(
        ''
        , [Validators.required]),
      author: new FormControl(
        ''
        , [Validators.required]),
      description: new FormControl(
        ''
        , [Validators.required]),
      price: new FormControl(
        ''
        , [Validators.required]),
    })
    
  }

  get f() {
    return this.form?.controls;
  }

  submit(course: Course) {
    this.onSubmit.emit(course);
  }

}
