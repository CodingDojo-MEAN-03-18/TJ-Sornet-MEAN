import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()

export class ProductService {
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

  updateProduct(index: number, selectedProduct: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === index) {
        console.log('got here', selectedProduct);
        this.products[i].title = selectedProduct.title;
        this.products[i].price = selectedProduct.price;
        this.products[i].image = selectedProduct.image;
      }
    }
  }

}
