import { Component, Input, Output, EventEmitter } from '@angular/core';
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
}
