import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../configurations/environmentsConfig/environment.local'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // private apiUrl = '/api/v1/products/';

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMenu(target:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+target);
  }
}
