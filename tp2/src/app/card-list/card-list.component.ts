import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

/* Définition correcte du type des cartes */
type Card = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-card-list',
  standalone: true, // Permet une utilisation sans module
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() cards: Card[] = [
    { title: 'Search doctor', description: 'Choose your doctor from thousands of specialists.', imageUrl: 'assets/loop-icon.png' },
    { title: 'Online pharmacy', description: 'Buy your medicines with our mobile app.', imageUrl: 'assets/pharmacy-icon.png' },
    { title: 'Consultation', description: 'Free consultation with our trusted doctors.', imageUrl: 'assets/consultation-icon.png' },
    { title: 'Details info', description: 'Free consultation and best recommendations.', imageUrl: 'assets/details-icon.png' },
    { title: 'Emergency care', description: '24/7 urgent care for you and your family.', imageUrl: 'assets/emergency-icon.png' },
    { title: 'Tracking', description: 'Track and save your medical history.', imageUrl: 'assets/tracking-icon.png' }
  ];
}
