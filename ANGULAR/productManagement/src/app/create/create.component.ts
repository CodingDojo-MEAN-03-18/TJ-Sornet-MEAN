import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = new Product();

  constructor(private _productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.product.id = this._productService.randomID();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this._productService.addProduct(this.product);
    console.log(this.product);
    console.log(this._productService.products);
    this.product = new Product();
    this.router.navigateByUrl('/products');
  }

}
