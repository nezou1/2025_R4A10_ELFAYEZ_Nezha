import { CurrencyPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe, CommonModule], // Ajout de CommonModule pour gérer les directives Angular
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent {
  pizza = {
    name: 'Végétarienne',
    image:
      'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
    description: 'Un mélange délicieux de légumes frais et de fromage.',
    ingredients: ['Tomate', 'Mozzarella', 'Poivrons', 'Champignons', 'Oignons'],
    price: 9.99,
    rating: 3,
  };

  get stars(): number[] {
    return Array.from({ length: this.pizza.rating }, () => 0); // Correction pour générer les étoiles correctement
  }
}
