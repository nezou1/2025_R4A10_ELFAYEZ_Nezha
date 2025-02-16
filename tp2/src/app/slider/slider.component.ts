import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentIndex: number = 0;
  testimonials = [
    {
      img: '/assets/user1.png',
      name: 'Edward Newgate',
      title: 'Founder Circle',
      quote: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      img: '/assets/user2.jpg',
      name: 'Jane Doe',
      title: 'CEO, TechCorp',
      quote: 'This platform has transformed the way we interact with our customers, making everything seamless and efficient.'
    }
  ];

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  selectSlide(index: number): void {
    this.currentIndex = index;
  }
}
