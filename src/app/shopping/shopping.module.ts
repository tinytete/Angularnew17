import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingSearchComponent } from './shopping-search/shopping-search.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingModule { }
