import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private API_URL= 'http://localhost:3000/api/workouts'; 

  constructor(private http: HttpClient) { }

    getAllWorkouts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addWorkout(data: FormData): Observable<any> {
    const uploadURL = `${this.API_URL}/upload`;
    return this.http.post(uploadURL, data);
  }

  getWorkoutsBySection(sectionId:string):Observable<any>{
    return this.http.get(`${this.API_URL}/section/${sectionId}`)
  }

  deleteWorkoutSection(workoutId: string):Observable<any>{
    return this.http.delete(`${this.API_URL}/${workoutId}`)
  }
}
