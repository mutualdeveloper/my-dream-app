import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenubarComponent} from '../menubar/menubar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-financiacion',
  templateUrl: './financiacion.component.html',
  styleUrls: ['./financiacion.component.css']
})
export class FinanciacionComponent implements OnInit {

  constructor() {
    localStorage.setItem('previousUrl','financiacion');
    window.scrollTo(0,0); 
    let doc = document.getElementById('html');
    doc.className = '';
    let bo = document.getElementById('body');
    bo.className = '';
    let preprepre = document.getElementById('preprepre');
    preprepre.className = 'hide';
  }

  ngOnInit() {
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
