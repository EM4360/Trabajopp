import { Component} from '@angular/core';
import {item} from "../../models/item"
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{
  
total: number = 0;
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
    title: "pan   ",
    price: 3.5,
    quantity:8,
    complete: true
   },
   {
    id: 2,
    title: "campera",
    price: 300,
    quantity:1,
    complete: true
   }
];


deleteItem(item: item){
  this.items = this.items.filter(x => x.id !== item.id)
  this.getTotal();
}

toggleItem(item: item){    
this.getTotal
  
}
getTotal(){
  this.total = this.items.filter(x => !x.complete).map(x=> x.quantity* x.price).reduce((acc,item) => acc+= item,0)
  }
}




