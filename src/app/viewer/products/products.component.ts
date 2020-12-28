import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/interfaces/product';
import { OrderService } from 'src/app/model/services/order.service';
import { ProductsService } from 'src/app/model/services/products.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnDestroy, OnChanges {
  @Input()  filterString = "";
  public products$: Observable<Product[]>;
  public subcribes$: Subscription[] = [];
  public resultCount: number;

  constructor(
       readonly productsService: ProductsService,
       readonly orderService: OrderService
  ) {
    this.products$ = this.productsService.getAllProducts$();
    this.resultCount = this.productsService.getProductCount();
    if (!this.orderService.isOrderOpen()) {
      this.orderService.createNewOrder(`order${new Date()}`);
    }
  }

  public ngOnChanges(): void {
    this.products$ = this.productsService.getFilteredProducts$(
      this.filterString
    );
    this.subcribes$.push(
      this.products$.subscribe(
        (products) => (this.resultCount = products.length)
      )
    );
  }

  public ngOnDestroy(): void {
    this.subcribes$.forEach((elem) => elem.unsubscribe());
  }

  public trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  public onAddProductToCart(product: Product): void {
    console.log(product + "added to cart");
    this.orderService.insertProductInOrder(product);
  }

  public checkIsGreaterThenMaxOrderCount(): boolean {
    return this.orderService.isGreaterThanMaxOrderCount();
  }
}