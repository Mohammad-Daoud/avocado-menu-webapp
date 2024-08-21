import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = '/api/v1/products/';

  constructor(private http: HttpClient) { }

  getMenu(target:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+target);
  }
}
