import { Component, Input, Output,EventEmitter} from '@angular/core';
import {item} from "../../models/item"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
onDelete(item: item){
 this.deleteItem.emit(item)
}
onToggle(item: item){
  item.complete =! item.complete
}

@Input() item: item = new item(); 
@Output() deleteItem: EventEmitter<item> = new EventEmitter()
};

