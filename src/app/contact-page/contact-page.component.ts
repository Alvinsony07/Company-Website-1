// contact-page.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  
  contactForm: FormGroup;
  isScrolled = false;
  isSubmitting = false;
  showSuccessMessage = false;

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      info: 'hello@neuraleaf.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      info: '+91 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      description: 'Come visit our office in the heart of the tech district.',
      info: '123 Tech Street, Kerala, India'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      description: 'We\'re available to help you during these hours.',
      info: 'Mon-Fri: 9AM-6PM PST'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
      
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  scrollToSection(elementId: string): void {
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