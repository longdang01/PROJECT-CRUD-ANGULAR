import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  course?: Course;
  id: number = 0;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.coursesService.getCourseById(this.id).subscribe(data => {
      this.course = data
    })
  }

  submit(course: Course) {

    this.coursesService.updateCourse(this.id, course).subscribe(data => {
      this.router.navigateByUrl('/courses');
    });
  }
}
