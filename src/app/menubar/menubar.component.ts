import { Component, OnInit } from '@angular/core';
import {ItemMenuBar} from './menubar.item.model';
import { MenubarServices  } from './menubar.service';
@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  providers: [MenubarServices]
})
export class MenubarComponent implements OnInit {
  public bar: ItemMenuBar[] = [];
  public itemHistory: ItemMenuBar;
  public title: string = "Titulo";
  constructor(private menubarService: MenubarServices) {
      this.bar.push(new ItemMenuBar('Inicio',undefined,'home#inicio'));
      this.bar.push(new ItemMenuBar('Servicios',undefined,'home#service'));
      this.bar.push(new ItemMenuBar('Aéreos',undefined,'home#aereos'));
      this.bar.push(new ItemMenuBar('Paquetes Turísticos',undefined,'home#paquetes'));
  }

  ngOnInit() {
    this.menubarService.getMenus().subscribe(
      resp => this.bar = resp,
      error => console.log(error)
    );
  }

  goTo(location: string,tipo:string): void {
      if(tipo =='interna'){
        window.location.hash = location;
      }
 }

}
