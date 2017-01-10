import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public titulo:string = 'Bla bla Titulo';
  public descripcion:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eos neque officiis reiciendis quibusdam enim, qui illo placeat cum sint iusto doloribus est suscipit impedit culpa numquam soluta tenetur recusandae.';
  public btnTitulo:string = 'IR AL COTIZADOR';
  public subtitulo:string = '¡Calcula tu vuelo!';

  constructor() { }

}
