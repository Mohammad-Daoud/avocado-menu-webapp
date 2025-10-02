import { Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ImageModalService, ImageModalData } from './services/image-modal.service';
import {SlideShowService} from "./services/slide-show-service";
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent  implements OnInit {
  isNavbarCollapsed = true;
  modalData: ImageModalData | null = null;
  modalOpen = false;
  title = 'menu-app';
  slideImages: string[] = [];
  slideCurrentIndex = 0;
  slideInterval: any;
  showSlideshow = true;
 constructor(
   @Inject(DOCUMENT) private document: Document,
   private imageModalService: ImageModalService,
   private slideShowService: SlideShowService,
   private router: Router,
 ) {
   this.document.documentElement.lang = 'ar';
   this.document.documentElement.dir = 'rtl';
   this.imageModalService.modalData$.subscribe(data => {
     this.modalData = data;
     this.modalOpen = !!data;
   });
   this.router.events
     .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe(event => {
       const navEnd = event as NavigationEnd;
       this.showSlideshow = navEnd.urlAfterRedirects !== '/offers' && navEnd.urlAfterRedirects !== '/juice';
     });
 }
  windowScrolled: boolean = false;
  scrollProgress: number = 0;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = (scrollTop / docHeight) * 100;
      this.windowScrolled = scrollTop !== 0;
    });
    this.slideShowService.getSlideshowImages().subscribe(imgs => {
      this.slideImages = imgs;
      if (this.slideImages.length > 1) {
        this.startAutoSlide();
      }
    });
  }

  closeModal() {
    this.imageModalService.close();
  }

  openModal(image: ImageModalData): void {
    this.imageModalService.open(image);
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getProgressStyle(): string {
    return `conic-gradient(#E0D11F ${this.scrollProgress}%, transparent ${this.scrollProgress}%)`;
  }

  startAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.slideInterval = setInterval(() => {
      this.slideCurrentIndex = (this.slideCurrentIndex + 1) % this.slideImages.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }



}
