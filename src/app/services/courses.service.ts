import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private apiUrl = "http://localhost:5000/courses";

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getCourseById(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Course>(url);
  }
  addCourse(course: Course): Observable<Course> {

    return this.http.post<Course>(this.apiUrl, course, this.httpOptions);
  }
  updateCourse(course: Course): Observable<any> {
    
    return this.http.put(this.apiUrl, course, this.httpOptions);
  }
  deleteCourse(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Course>(url, this.httpOptions);
  }
}
