import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { catchError } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { HomePegeComponent } from './home-pege/home-pege.component';
import { travels } from './Travels-d';
import { TravelsComponent } from './travels/travels.component';
import { TravelsListeComponent } from './travels-liste/travels-liste.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{
  path: "travels",component:TravelsListeComponent},{
  path: "travels/:index",component:TravelsComponent
},
{
  path:"cart",component: CartComponent
},{
  path:"",component: HomePegeComponent
},
{
  path:"blog",component: BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
