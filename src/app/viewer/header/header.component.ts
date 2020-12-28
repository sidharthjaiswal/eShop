import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/model/services/order.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(   readonly orderService: OrderService) {
  }

  public getCartCount(): number {
    return this.orderService.getOrdnerCount();
  }

  public getTotal(): number {
    return this.orderService.getTotal();
  }

}