import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {item} from "../../models/item"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item: item = new item(); 
@Output() deleteItem: EventEmitter<item> = new EventEmitter()
@Output() toggleItem: EventEmitter<item> = new EventEmitter()
  constructor(){}  
  ngOnInit(): void {
    
  }
onDelete(item: item){
 this.deleteItem.emit(item)
}
onToggle(item: item){
  item.complete = !item.complete
  this.toggleItem. emit(item);
}

};

