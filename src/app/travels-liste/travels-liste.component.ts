import { Component, OnInit } from '@angular/core';
import { travels } from '../Travels-d';
import { ITravels } from '../ITravels';

@Component({
  selector: 'app-travels-liste',
  templateUrl: './travels-liste.component.html',
  styleUrls: ['./travels-liste.component.css']
})
export class TravelsListeComponent implements OnInit {
   travels:ITravels[]=travels

  constructor() { }

  ngOnInit(): void {
  }

}
