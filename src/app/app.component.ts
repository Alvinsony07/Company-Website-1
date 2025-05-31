// app.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'NeuraLeaf Solutions';
  isScrolled = false;

  // Social media links
  socialLinks = {
    facebook: 'https://www.facebook.com/alvin.sony.397',
    linkedin: 'https://www.linkedin.com/in/alvin-sony/',
    twitter: 'https://x.com/alvin_sony3',
    instagram: 'https://www.instagram.com/alvin_sony_/',
    github: 'https://github.com/Alvinsony07'
  };

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  ngOnInit() {
    // Scroll to top on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  // Method to open social media links in new tab
  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
