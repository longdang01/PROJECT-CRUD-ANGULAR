import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  mtr: string = '45';

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
  updateCourse(id: number, course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${id}`

    return this.http.put<Course>(url, course, this.httpOptions);
  }
  deleteCourse(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Course>(url, this.httpOptions);
  }
  searchCourse(term: string): Observable<Course[]> {
    const url=`${this.apiUrl}/?keyword=${term}`;
    console.log(url);

    return this.http.get<Course[]>(url);
  }
}
