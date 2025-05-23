import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private API_URL= 'http://192.168.0.36:3000/api/section'; 

  constructor(private http: HttpClient) {}

    getAllSections(): Observable<any>{
      return this.http.get(this.API_URL);
    }

   }

