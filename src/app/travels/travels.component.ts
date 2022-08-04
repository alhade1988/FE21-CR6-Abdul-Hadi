import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { travels } from '../Travels-d';
import { ITravels } from '../ITravels';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travels: ITravels = {} as ITravels;
  id: number = 0;
  

  constructor(private route: ActivatedRoute, private cs: CartService) { }
  addTocart(){
    alert("Your favorite traveler");
    this.cs.addToCart(this.travels);
  }

 ngOnInit(): void {
   this.route.params.subscribe((params: Params) => {
    this.id = +params['index'];
    this.travels = travels[ this.id];
  });

 }
}


