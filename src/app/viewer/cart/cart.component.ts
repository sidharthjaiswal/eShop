import { Component } from '@angular/core';
import { Order } from 'src/app/model/interfaces/orders';
import { OrderService } from 'src/app/model/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public orders: Order[];

  constructor(   readonly orderService: OrderService) {
    this.orders = this.orderService.getAllOrders();
  }
  public trackByOrderId(order: Order): number {
    return order.id;
  }

  public getTotal(id: number): number {
    return this.orderService.getTotalOfOrder(id);
  }
}