// home-page.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  
  stats = [
    { number: 0, target: 500, label: 'Happy Students' },
    { number: 0, target: 150, label: 'Daily Meals Served' },
    { number: 0, target: 25, label: 'Menu Items' },
    { number: 0, target: 98, label: 'Satisfaction %' }
  ];

  todaysSpecials = [
    {
      name: 'Chicken Biriyani',
      description: 'Aromatic basmati rice with tender spiced chicken, served with raita and pickle.',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=400&h=300&fit=crop',
      price: 120,
      isVeg: false
    },
    {
      name: 'Special Veg Thali',
      description: 'Complete meal with dal, vegetables, rice, roti, pickle, and sweet.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      price: 80,
      isVeg: true
    },
    {
      name: 'Masala Dosa',
      description: 'Crispy golden crepe filled with spiced potato curry, served with sambar and chutney.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop',
      price: 45,
      isVeg: true
    }
  ];

  isScrolled = false;
  statsAnimated = false;

  ngOnInit() {
    this.observeStatsSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  private observeStatsSection() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.statsAnimated) {
          this.animateStats();
          this.statsAnimated = true;
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      const statsElement = document.querySelector('.stats-section');
      if (statsElement) {
        observer.observe(statsElement);
      }
    }, 100);
  }

  private animateStats() {
    this.stats.forEach((stat, index) => {
      this.animateNumber(stat, 2000 + (index * 200));
    });
  }

  private animateNumber(stat: any, duration: number) {
    const start = 0;
    const end = stat.target;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      stat.number = Math.floor(start + (end - start) * this.easeOutCubic(progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  scrollToSection(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}