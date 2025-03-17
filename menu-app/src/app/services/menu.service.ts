import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { environment } from '../configurations/environmentsConfig/environment.local'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // private apiUrl = '/api/v1/products/';

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

/*  getMenu(target: string): Observable<any> {
    const staticData = {
      "menu1": { "id": 1, "name": "Menu 1", "items": ["Item 1", "Item 2"] },
      "menu2": { "id": 2, "name": "Menu 2", "items": ["Item A", "Item B"] }
    };
    return new Observable(observer => {
      observer.next(staticData[target] || {});
      observer.complete();
    });
  }*/
  getMenu(target: string): Observable<any> {
    return this.http.get<any>('assets/menu-data.json').pipe(
        map(data => data[target] || {})
    );
  }
}
