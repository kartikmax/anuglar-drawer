import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const routeApi = 'http://localhost:3000/periodicElements';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  addElement(data: any): Observable<any> {
    return this.http.post(routeApi, data);
  }

  updateElement(position: number, data: any): Observable<any> {
    return this.http.put(`${routeApi}/${position}`, data);
  }

  getElementList(): Observable<any> {
    return this.http.get(routeApi);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete(`${routeApi}/${position}`);
  }
}
