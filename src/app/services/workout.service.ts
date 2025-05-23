import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private API_URL= 'http://192.168.0.36:3000/api/workouts'; 

  constructor(private http: HttpClient) { }

    getAllWorkouts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addWorkout(data: any): Observable<any> {
    return this.http.post(this.API_URL, data);
  }
}
