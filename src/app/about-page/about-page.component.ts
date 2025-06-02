import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {
  
  isScrolled = false;

  teamMembers = [
  {
    id: 1,
    name: 'Alvin Sony',
    role: 'Founder & CEO',
    image: 'https://pbs.twimg.com/media/GsKc5D7aUAAhY-F?format=jpg&name=small',
    bio: 'Tech enthusiast with a passion for AI and clean web architecture.',
    linkedin: 'https://www.linkedin.com/in/alvin-sony/',
    twitter: 'https://x.com/alvin_sony3'
  },
  
{
      id: 2,
      name: 'Alicia Samuel',
      role: 'Chief Technology Officer',
      bio: 'Expert in AI and cloud architecture solutions',
      image: 'https://cdn.leonardo.ai/users/0b7400cc-a25a-491e-afc6-649c4d11e717/generations/3fc0e9a4-547b-4554-aa68-a496c53b9fd9/segments/4:4:1/Flux_Dev_generate_an_image_of_a_polished_young_professional_wo_3.jpg'
    },
    {
      id: 3,
      name: 'David John',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience',
      image: 'https://cdn.leonardo.ai/users/0b7400cc-a25a-491e-afc6-649c4d11e717/generations/7d85432f-3292-429a-a35c-6a26e431fe7f/segments/3:4:1/Flux_Dev_generate_an_image_of_a_younglooking_professional_with_2.jpg'
    },
    {
      id: 4,
      name: 'Martin Cooper',
      role: 'Lead Developer',
      bio: 'Full-stack developer and technical architect',
      image: 'https://cdn.leonardo.ai/users/0b7400cc-a25a-491e-afc6-649c4d11e717/generations/e1806098-acda-4a97-b71a-8b100b8e5611/segments/3:4:1/Flux_Dev_generate_an_image_of_an_young_looking_professional_me_2.jpg'
    }
  ];

  companyValues = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities in technology.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Excellence',
      description: 'We strive for perfection in every product and service we deliver.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective intelligence.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Impact',
      description: 'We create solutions that make a meaningful difference in the world.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Growth',
      description: 'We embrace continuous learning and adaptation in a changing world.'
    }
  ];

  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}