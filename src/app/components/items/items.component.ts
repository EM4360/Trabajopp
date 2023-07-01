import {Component,OnInit} from '@angular/core';
import {item} from "../../models/item"
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{ 
  
  
total: number = 0;
items : item[] = []
constructor( private itemService:ItemService){}
 ngOnInit(): void {
  //this.items = []
  this.items = this.itemService.getItems(); 
  this.getTotal()
 }

deleteItem(item: item){
  this.items = this.items.filter(x => x.id !== item.id)
  this.getTotal();
}

toggleItem(item: item){    
this.getTotal()
  
}
getTotal(){
  this.total = this.items.filter(x => !x.complete).map(x => x.quantity*x.price).reduce((acc,item) => acc+= item,0)
  }
}




