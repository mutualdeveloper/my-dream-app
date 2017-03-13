import { Component, OnDestroy } from '@angular/core';
import {MenubarComponent} from '../menubar/menubar.component';
import {FooterComponent} from '../footer/footer.component';


@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent  {
  constructor() {
    localStorage.setItem('previousUrl','institucional');
    window.scrollTo(0,0);
    let doc = document.getElementById('html');
    doc.className = '';
    let bo = document.getElementById('body');
    bo.className = '';
    let preprepre = document.getElementById('preprepre');
    preprepre.className = 'hide';
   }


  ngOnDestroy() {
    window.scrollTo(0,0); 
    let doc = document.getElementById('html');
    doc.className = 'page-document';
    let bo = document.getElementById('body');
    bo.className = 'page-document';
    let preprepre = document.getElementById('preprepre');
    preprepre.className = 'page-document text-center show';
  }

}
