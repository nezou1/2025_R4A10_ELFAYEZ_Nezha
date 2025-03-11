import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { OrderCardComponent } from "./features/orders/components/order-card/order-card.component";
import { OrderListPageComponent } from "./features/orders/pages/order-list-page/order-list-page.component";
import { OrderPizzaPageComponent } from "./features/pizza/pages/order-pizza-page/order-pizza-page.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, OrderCardComponent, OrderListPageComponent, OrderPizzaPageComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
