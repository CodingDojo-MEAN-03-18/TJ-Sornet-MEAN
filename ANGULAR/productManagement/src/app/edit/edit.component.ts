import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  product: Product = new Product();
  constructor(private _productService: ProductService, private router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.id = parseInt(params.get('id'), 10);
    });
  }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._productService.updateProduct(this.id, this.product);
    this.router.navigateByUrl('/products');
  }

  onDelete() {
    this._productService.deleteProduct(this.id);
    this.router.navigateByUrl('/products');
  }

}
