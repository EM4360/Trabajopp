import { Component, OnInit} from '@angular/core';
import { item } from 'src/app/models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
  id: string= ""
  title: string= "";
  price: number = 0
  quantity:number = 0;

}
