import { Component, OnInit } from '@angular/core';
import {MenubarComponent} from '../menubar/menubar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit {

  constructor() {
    let doc = document.getElementById('html');
    doc.className = '';
    let bo = document.getElementById('body');
    bo.className = '';
    let preprepre = document.getElementById('preprepre');
    preprepre.className = 'hide';
   }

  ngOnInit() {
  }

}
