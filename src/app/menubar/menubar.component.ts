import { Component, OnInit } from '@angular/core';
import {ItemMenuBar} from './menubar.item.model';
@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  public bar: ItemMenuBar[] = [];
  public itemHistory: ItemMenuBar;
  public title: string = "Titulo";
  constructor() {
      this.bar.push(new ItemMenuBar('Inicio', null,'home#inicio'));
      this.bar.push(new ItemMenuBar('Servicios',null,'home#service'));
      this.bar.push(new ItemMenuBar('Aereos',null,'home#aereos'));
      this.bar.push(new ItemMenuBar('Paquetes Turisticos',null,'home#paquetes'));
  }

  ngOnInit() {
    console.log(this.bar);
  }

}
