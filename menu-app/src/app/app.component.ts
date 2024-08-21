import {Component, HostListener, Inject, OnInit, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Ensure this is plural `styleUrls`
})
export class AppComponent  implements OnInit {
  title = 'menu-app';

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    this.document.documentElement.lang = 'ar';
    this.document.documentElement.dir = 'rtl';
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
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbarCollapse = this.document.querySelector('.navbar-collapse');
    const isClickInsideNavbar = (event.target as HTMLElement).closest('.navbar');
    if (!isClickInsideNavbar && navbarCollapse?.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const navbarCollapse = this.document.querySelector('.navbar-collapse');
    if (navbarCollapse?.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getProgressStyle(): string {
    return `conic-gradient(#E0D11F ${this.scrollProgress}%, transparent ${this.scrollProgress}%)`;
  }
}
