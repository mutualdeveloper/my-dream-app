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
      
  }

  ngOnInit() {
    this.menubarService.getMenus().subscribe(
      resp => this.bar = resp,
      error => console.log(error)
    );
  }

}
