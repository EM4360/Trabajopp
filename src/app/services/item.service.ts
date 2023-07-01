import { Injectable } from '@angular/core';
import { item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:item[]=[
      {
        id: 0,
        title: "Manzana",
        price: 100,
        quantity:4,
        complete: false
       },
       {
        id: 1,
        title: "Milanesa",
        price: 500,
        quantity:8,
        complete: false
       },
       {
        id: 2,
        title: "Coca cola",
        price: 300,
        quantity:1,
        complete: false
       }
  ]
  constructor() { }

  getItems(){
    return this.items;
  }
  addItem(item: item){
    this.items.unshift(item);
  }
}
