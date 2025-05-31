// home-page.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  
  stats = [
    { number: 0, target: 500, label: 'Happy Clients' },
    { number: 0, target: 1000, label: 'Projects Completed' },
    { number: 0, target: 50, label: 'Team Members' },
    { number: 0, target: 99, label: 'Uptime %' }
  ];

  products = [
    {
      title: 'NeuraLeaf AI',
      description: 'Smart AI-powered tools for automation, analytics, and decision-making.',
      image: 'https://cdn.prod.website-files.com/62fcfcf2e1a4c21ed18b80e6/65f30e865fe174cd66448f86_ai_platform_illustration_aga2.webp',
      features: ['Machine Learning', 'Predictive Analytics', 'Automation']
    },
    {
      title: 'DevXOps',
      description: 'CI/CD, monitoring, and deployment tools tailored for modern developers.',
      image: 'https://www.orangemantra.com/blog/wp-content/uploads/2022/12/Infographics-1-5.png',
      features: ['Continuous Integration', 'Monitoring', 'Deployment']
    },
    {
      title: 'NeuraLeaf Cloud',
      description: 'Unified SaaS dashboard for managing your digital assets with ease.',
      image: 'https://cdn.prod.website-files.com/643d2eea03135260bdaca209/6585cea39ae01230757b9f31_QuantumCloud.webp',
      features: ['Cloud Management', 'Analytics', 'Security']
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