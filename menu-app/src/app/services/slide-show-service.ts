// menu-app/src/app/services/slide-show-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SlideShowService {
    private menuDataUrl = 'assets/menu-data.json';

    constructor(private http: HttpClient) {}

    getSlideshowImages(): Observable<string[]> {
        return this.http.get<any>(this.menuDataUrl).pipe(
            map(data => data.slideshow || [])
        );
    }
}