/*import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../../models/order'; 

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input({ required: true }) order!: Order;
  @Output() deleteOrder = new EventEmitter<number>(); 

  removeOrder() {
    this.deleteOrder.emit(Number(this.order.id));
  }
}*/

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() order!: Order;  // Ajout de l'entrée pour recevoir la commande
  @Output() deleteOrder = new EventEmitter<string>(); // Ajout d'un événement pour supprimer

  removeOrder() {
    this.deleteOrder.emit(this.order.id); // Émettre l'ID de la commande au parent
  }
}

