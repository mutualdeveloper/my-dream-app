import { Component, OnInit } from '@angular/core';
import { ItemThumbnail } from './thumbnail.item.model';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  public thumbnails: ItemThumbnail[] = [];
  public item1: ItemThumbnail;
  public item2: ItemThumbnail;
  public item3: ItemThumbnail;
  public item4: ItemThumbnail;
  
  public titulo:string = "Servicios"

  constructor() {
    this.item1 = new ItemThumbnail('Aéreos','Todos nuestros Socios pueden solicitar pasajes aéreos para volar a cualquier destino de la Argentina, como así también al exterior.',null, 'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/aereo.jpg','#aereos','referencia');
    this.item2 = new ItemThumbnail('Alojamientos','Cada socio de la Mutual de Petroleros puede contratar en su Departamento de Turismo todo tipo de alojamientos, hoteles, cabañas, hostería o alquileres temporarios.',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/alojamiento.jpg','modal','modalAlojamiento');
    this.item3 = new ItemThumbnail('Paquetes','Acerquenos su inquietud y recibirá asesoramiento en base a fechas, cantidad de personal y todo lo necesario para comenzar a armar su paquete turistico.',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/paquetes.jpg','#paquetes','referencia');
    this.item4 = new ItemThumbnail('Cruceros','Nuestra Mutual trabaja junto a las dos más grandes empresas de cruceros',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/crucero.jpg',null,'modalCruceros');
    this.thumbnails.push(this.item1);
    this.thumbnails.push(this.item2);
    this.thumbnails.push(this.item3);
    this.thumbnails.push(this.item4);
  }

  ngOnInit() {
  }

}
