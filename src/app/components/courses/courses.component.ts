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
  keyword: string = '';
  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data
    })
  }

  searchCourse() {
    if(this.keyword === '') {
      this.ngOnInit();
    } else {
      this.courses = this.courses.filter(data => {
        return data.course_name.toLowerCase().match(this.keyword.toLowerCase()) ||
        data.course_id.toLowerCase().match(this.keyword.toLowerCase())
      })
    }
  }
  // searchCourse(keyword: string) {
  //   console.log(1);
  //   this.coursesService.searchCourse(keyword).subscribe(data => {
  //     console.log(data);
  //   })  
  // }

  onDeleteCourse(course: Course) {
    this.courses = this.courses.filter(h => h !== course);
    this.coursesService.deleteCourse(course.id).subscribe();
  }

}
