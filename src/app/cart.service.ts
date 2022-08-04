import { Injectable } from '@angular/core';
import { ITravels } from './ITravels';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ITravels[] = [];

  constructor () {}
  
  addToCart(travels: ITravels) {
    this.items.push(travels);
  };
  clearCart() {
    this.items = [];
    return  this.items;
  }
  

  Total(){
    let total = 0;
    for (let val of this.items){
      total = total + val.price;
    }
    return total;
  };
  
  getItems() {
    return  this.items;
  };
  };
  