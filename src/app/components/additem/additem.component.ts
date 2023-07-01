import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  id: number= 0
  title: string= "";
  price: number = 0
  quantity:number = 0;
   
  constructor(private itemService: ItemService, private Router:Router){}
  ngOnInit(): void {
    
  }
  onSubmit(){
    const Item = new item();
    Item.id = this.id;
    Item.title = this.title;
    Item.price = this.price;
    Item.quantity = this.quantity
    Item.complete = false; 

    this.itemService.addItem(Item)
    this.Router.navigate(["/"])
  }

}
