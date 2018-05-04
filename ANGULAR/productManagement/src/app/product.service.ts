import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

@Injectable()

export class ProductService {
  // Using Observables
  // products: BehaviorSubject<any[]> = new BehaviorSubject([
  //   {
  //     id: this.randomID(),
  //     title: 'Laptop',
  //     price: 500.00,
  //     image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6113/6113108_sd.jpg'
  //   },
  //   {
  //     id: this.randomID(),
  //     title: 'Mouse',
  //     price: 10.00,
  //     image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2577/2577677_sa.jpg'
  //   },
  //   {
  //     id: this.randomID(),
  //     title: 'Router',
  //     price: 85.00,
  //     image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9054/9054017_sa.jpg'
  //   },
  //   {
  //     id: this.randomID(),
  //     title: 'USB',
  //     price: 5.00,
  //     image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9288/9288807_sa.jpg'
  //   },
  // ]);

  // Using strictly Service
  products: Array<Product> = [
    {
      id: this.randomID(),
      title: 'Laptop',
      price: 500.00,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6113/6113108_sd.jpg'
    },
    {
      id: this.randomID(),
      title: 'Mouse',
      price: 10.00,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2577/2577677_sa.jpg'
    },
    {
      id: this.randomID(),
      title: 'Router',
      price: 85.00,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9054/9054017_sa.jpg'
    },
    {
      id: this.randomID(),
      title: 'USB',
      price: 5.00,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9288/9288807_sa.jpg'
    },
  ];

  constructor() { }

  addProduct(item: Product) {
    this.products.unshift(item);
  }

  // updateData(newData: any): void {
  //   this.data.
  // }
  randomID(): number {
    return Math.floor(Math.random() * 1000);
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }

  getProducts() {
    return of(this.products);
  }

  getProduct(prodID: number) {
    const product = this.products.find( prod => prod.id === prodID );
    return of(product);
  }

  updateProduct(selectedProduct: Product) {
    this.products = [...this.products.filter(prod => prod.id !== selectedProduct.id), selectedProduct];
    return of(this.products);
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === index) {
    //     console.log('got here', selectedProduct);
    //     this.products[i].title = selectedProduct.title;
    //     this.products[i].price = selectedProduct.price;
    //     this.products[i].image = selectedProduct.image;
    //   }
    // }
  }

}
