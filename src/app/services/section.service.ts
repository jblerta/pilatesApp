import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private API_URL= 'http://localhost:3000/api/section'; 

  constructor(private http: HttpClient) {}

    getAllSections(): Observable<any>{
      return this.http.get(this.API_URL);
    }

    addSection(data: FormData):Observable<any>{
      const uploadURL = `${this.API_URL}/upload`;
      return this.http.post(uploadURL, data);
      
    }

   }

