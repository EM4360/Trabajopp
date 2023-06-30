import { Component } from '@angular/core';
import {item} from "../../models/item"
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{
items : item[] = [
  {
    id: 0,
    title: "manzana",
    price: 10.5,
    quantity:4,
    complete: false
   },
   {
    id: 1,
    title: "pan",
    price: 3.5,
    quantity:8,
    complete: false
   }
];

}

