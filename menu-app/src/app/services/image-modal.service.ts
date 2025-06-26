import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ImageModalData {
    imageUrl: string;
    title: string;
    description?: string;
}

@Injectable({ providedIn: 'root' })
export class ImageModalService {
    private modalData = new Subject<ImageModalData | null>();
    modalData$ = this.modalData.asObservable();

    open(data: ImageModalData) {
        this.modalData.next(data);
    }
    close() {
        this.modalData.next(null);
    }
}