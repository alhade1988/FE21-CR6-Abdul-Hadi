import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ITravels } from '../ITravels';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ITravels[]=[];

  constructor(private cs : CartService) { };
  info = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    Email: new FormControl(""),
  })
  total: number =0;

  ngOnInit(): void {
    
    this.cart = this.cs.getItems();
   
    // this.total = this.cs.Total();


     if (this.cs.Total()>= 200 && this.cs.Total() < 500){
       this.total= this.cs.Total() * 0.9;
  }
     else if (this.cs.Total() >= 500){
      this.total= this.cs.Total() * 0.8;
     }
     else
     this.total=this.cs.Total();
  }
  makeOrder(){

    alert( "Your order has been submitted");
    this.cart = this.cs.clearCart();
    this.info.reset();
     this.total = this.cs.Total();
    
  }

}
