import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza';

@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  imports: [FormsModule, CommonModule], // Activation du formulaire avec FormsModule
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css',
})
export class OrderPizzaPageComponent implements OnInit {
  private router = inject(Router);
  private pizzaService = inject(PizzaService);

  pizzas: Pizza[] = []; // Liste des pizzas récupérées
  order = {
    pizza: '',
    size: 'Medium',
    paymentMethod: 'Cash',
    email: '',
  };

  ngOnInit() {
    this.loadPizzas();
  }

  loadPizzas() {
    this.pizzaService.getPizzas().subscribe((pizzas: Pizza[]) => {
      this.pizzas = pizzas;
      console.log("✅ Pizzas disponibles :", this.pizzas);
    });
  }

  submitOrder() {
    if (!this.order.pizza) {
      console.log("❌ Veuillez sélectionner une pizza !");
      return;
    }
    console.log("✅ Commande validée :", this.order);
    this.router.navigate(['/orders']); // Redirection après la commande
  }
}
