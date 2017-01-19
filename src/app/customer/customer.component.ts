import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public titulo:string = 'Calculá tu Vuelo';
  public descripcion:string = 'Todos nuestros socios pueden solicitar pasajes aéreos para volar a cualquier destino de Argentina, como asi tambien al exterior haciendo uso de nuestro cotizador.';
  public btnTitulo:string = 'IR AL COTIZADOR';
  public subtitulo:string = '¡Calcula tu vuelo!';
  public refCotizador: string = 'http://www.mutualdepetroleros.tur.ar/servicios/ServiciosExternos/aereos';

  constructor() { }

}
