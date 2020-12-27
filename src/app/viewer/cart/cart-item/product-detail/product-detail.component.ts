import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/interfaces/product";
import { ProductsService } from "src/app/model/services/products.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productsService.getProductById(parseFloat(params.id));
    });
  }
}