import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Product>;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
    .subscribe( prod => this.products = prod);
  }

  onDelete(id: number) {
    this._productService.deleteProduct(id);
  }

}
