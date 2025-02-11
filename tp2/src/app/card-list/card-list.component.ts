import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-list',
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() cards: { title: string, description: string, imageUrl: string }[] = [
    { title: 'Search doctor', description: 'Choose your doctor from thousands of specialists.', imageUrl: 'assets/loop-icon.png' },
    { title: 'Online pharmacy', description: 'Buy your medicines with our mobile app.', imageUrl: 'assets/pharmacy-icon.png' },
    { title: 'Consultation', description: 'Free consultation with our trusted doctors.', imageUrl: 'assets/consultation-icon.png' },
    { title: 'Details info', description: 'Free consultation and best recommendations.', imageUrl: 'assets/details-icon.png' },
    { title: 'Emergency care', description: '24/7 urgent care for you and your family.', imageUrl: 'assets/emergency-icon.png' },
    { title: 'Tracking', description: 'Track and save your medical history.', imageUrl: 'assets/tracking-icon.png' }
  ];

  

}
