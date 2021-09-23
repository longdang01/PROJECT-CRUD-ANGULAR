import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course?: Course;
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.coursesService.getCourseById(id).subscribe(data => {
      this.course = data;
    });
  }

}
