import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = [
    {
      id: '1',
      name: 'Quatre Fromages',
      slug: 'quatre-fromages',
      image: 'https://example.com/quatre-fromages.jpg',
      description: 'Une pizza avec 4 fromages savoureux.',
      ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Chèvre'],
      price: 13.99,
      rating: 5,
    },
    {
      id: '2',
      name: 'Végétarienne',
      slug: 'végétarienne',
      image: 'https://example.com/vegetarienne.jpg',
      description: 'Un mélange de légumes frais.',
      ingredients: ['Tomate', 'Mozzarella', 'Poivrons', 'Champignons', 'Oignons'],
      price: 9.99,
      rating: 3,
    },
    {
      id: '3',
      name: 'Pepperoni',
      slug: 'pepperoni',
      image: 'https://example.com/pepperoni.jpg',
      description: 'Une pizza épicée avec du pepperoni.',
      ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
      price: 10.99,
      rating: 4,
    },
    {
      id: '4',
      name: 'Margherita',
      slug: 'margherita',
      image: 'https://example.com/margherita.jpg',
      description: 'Une pizza simple et savoureuse.',
      ingredients: ['Tomate', 'Mozzarella'],
      price: 8.99,
      rating: 4,
    }
  ];
  

  getPizzas(): Observable<Pizza[]> {
    console.log("Liste des pizzas envoyée par le service :", this.pizzas);
    return of(this.pizzas); // Retourne bien un Observable avec des pizzas
  }
}
