import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public titulo:string = 'Bla bla Titulo';
  public descripcion:string = 'Usted  podra cotizar en  pocos pasos su vuelo ingresando a nuestro cotizaro on line ';
  public btnTitulo:string = 'IR AL COTIZADOR';
  public subtitulo:string = '¡Calcula tu vuelo!';

  constructor() { }

}
