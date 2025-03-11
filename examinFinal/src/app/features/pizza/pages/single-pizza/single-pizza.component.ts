import { CommonModule } from '@angular/common'; // Importer CommonModule
import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // Ajouter CommonModule ici
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent implements OnInit {
  pizza!: Pizza;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pizzaService = inject(PizzaService);

  ngOnInit(): void {
    const pizzaSlug: string | null = this.route.snapshot.paramMap.get('name');
    console.log("Nom de la pizza récupéré dans l'URL :", pizzaSlug);

    if (!pizzaSlug) {
      this.router.navigate(['/404']);
      return;
    }

    this.pizzaService.getPizzas().subscribe((pizzas: Pizza[]) => {
      console.log("Pizzas disponibles :", pizzas);
      const foundPizza: Pizza | undefined = pizzas.find(p => p.slug === pizzaSlug);
      
      if (foundPizza) {
        this.pizza = foundPizza;
      } else {
        console.log("⚠️ Aucune pizza trouvée pour ce slug !");
        this.router.navigate(['/404']);
      }
    });
  }

  get stars(): number[] {
    return Array(this.pizza?.rating || 0).fill(0);
  }
}
