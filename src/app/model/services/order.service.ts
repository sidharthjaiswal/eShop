import { Injectable } from "@angular/core";
import { Order } from "../interfaces/orders";
import { ShoppingStatus } from "../interfaces/shoppingStatus";
import { Product } from "../interfaces/product";
import { CalculateFrancService } from "./calculate-franc.service";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private readonly MAX_ORDER_COUNT = 10;
  private orders: Order[] = [];
  private index = 0;

  constructor(private readonly calculateFrancService: CalculateFrancService) {}

  public createNewOrder(name?: string): number {
    const newOrder: Order = {
      id: this.index++,
      products: [],
      name,
      date: new Date(),
      status: ShoppingStatus.shoppingCart,
    };

    this.orders.push(newOrder);
    return newOrder.id;
  }

  public isOrderOpen(): boolean {
    return !!this.getOrderByStatusShoppingCart();
  }

  public getOrderById(id: number): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }

  public getOrderByStatusShoppingCart(): Order | undefined {
    return this.orders.find(
      (order) => order.status === ShoppingStatus.shoppingCart
    );
  }

  public getAllOrders(): Order[] {
    return this.orders;
  }

  public getOrdnerCount(): number {
    const order: Order | undefined = this.getOrderByStatusShoppingCart();
    if (order) {
      return order.products.length;
    }

    return 0;
  }

  public getTotal(): number {
    const order: Order | undefined = this.getOrderByStatusShoppingCart();
    if (order) {
      let result = 0;
      order.products.forEach(
        (product) =>
          (result += this.calculateFrancService.calculateInFranc(
            product.price,
            product.currency
          ))
      );
      return result;
    }

    return 0;
  }

  public getTotalOfOrder(orderId: number): number {
    const order: Order | undefined = this.getOrderById(orderId);
    if (order) {
      let result = 0;
      order.products.forEach(
        (product) =>
          (result += this.calculateFrancService.calculateInFranc(
            product.price,
            product.currency
          ))
      );
      return result;
    }

    return 0;
  }

  public isGreaterThanMaxOrderCount(): boolean {
    return this.getOrdnerCount() >= this.MAX_ORDER_COUNT;
  }

  public addOrder(order: Order): void {
    this.orders.push(order);
  }

  public setStatusToOrder(orderId: number, status: ShoppingStatus): void {
    const order: Order | undefined = this.getOrderById(orderId);
    if (order) {
      order.status = status;
    }
  }

  public setStatusCompleted(orderId: number): void {
    this.setStatusToOrder(orderId, ShoppingStatus.completed);
  }

  public insertProductInOrder(product: Product): void {
    if (product && !this.isGreaterThanMaxOrderCount()) {
      const order: Order | undefined = this.getOrderByStatusShoppingCart();
      if (order) {
        order.products.push(product);
      }
    }
  }

  public removeProductInOrder(productId: number): void {
    if (productId) {
      const order: Order | undefined = this.getOrderByStatusShoppingCart();
      if (order) {
        const index: number = order.products.findIndex(
          (product) => product.id === productId
        );
        if (index >= 0) {
          order.products.splice(index, 1);
        }
      }
    }
  }
}