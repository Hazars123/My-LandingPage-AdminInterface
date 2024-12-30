import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'LandingP';
}
export class CourseService {
  private apiUrl = 'http://localhost:8080/admin/addCr'; // Remplacez par votre URL

  constructor(private http: HttpClient) {}

  // Récupérer toutes les courses
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter une course
  addCourse(course: { title: string; price: number; image: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }
}