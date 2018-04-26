import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphaNums: number[] = [];
  betaNums: number[] = [];

  constructor() { }

  getNumbers(seq: string): number[] {
    const num = Math.floor(Math.random() * 10);
    if (seq === 'a') {
      this.alphaNums.unshift(num);
      return this.alphaNums;
    }
    if (seq === 'b') {
      this.betaNums.unshift(num);
      return this.betaNums;
    }
  }

  subtract(): number {
    const aSum = this.alphaNums.reduce(function(a, b) { return a + b; });
    const bSum = this.betaNums.reduce(function(c, d) { return c + d; });
    return aSum - bSum;
  }

}
