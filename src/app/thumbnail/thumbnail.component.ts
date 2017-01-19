import { Component, OnInit } from '@angular/core';
import { ItemThumbnail } from './thumbnail.item.model';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  //Colección de servicios
  public thumbnails: ItemThumbnail[] = [];  
  //Colecion de imagenes
  public cruceros: string[] = [];
  //Titulo del módulo
  public titulo:string = "Servicios";
  //URL base de las imagenes de cruceros
  public pathImgs:string = "http://mutualjerarquico.ddns.net/res/img/turismo/cruceros/";

  constructor() {
    
    this.thumbnails.push(new ItemThumbnail('Aéreos','Todos nuestros Socios pueden solicitar pasajes aéreos para volar a cualquier destino de la Argentina, como así también al exterior.',null, 'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/aereo.jpg','#aereos','referencia'));
    this.thumbnails.push(new ItemThumbnail('Alojamientos','Cada socio de la Mutual de Petroleros puede contratar en su Departamento de Turismo todo tipo de alojamientos, hoteles, cabañas, hostería o alquileres temporarios.',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/alojamiento.jpg','modal','modalAlojamiento'));
    this.thumbnails.push(new ItemThumbnail('Paquetes','Acerquenos su inquietud y recibirá asesoramiento en base a fechas, cantidad de personal y todo lo necesario para comenzar a armar su paquete turistico.',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/paquetes.jpg','#paquetes','referencia'));
    this.thumbnails.push(new ItemThumbnail('Cruceros','Nuestra Mutual trabaja junto a las dos más grandes empresas de cruceros',null,'http://mutualjerarquico.ddns.net/res/img/turismo/servicios/crucero.jpg',null,'modalCruceros'));
    this.thumbnails.push(new ItemThumbnail('Seguro de Viajero','Nuestra Mutual trabaja junto a las dos más grandes empresas de cruceros',null,'http://mutualjerarquico.ddns.net/res/img/turismo/seguroviajero.jpg',null,'modalCruceros'));
    this.thumbnails.push(new ItemThumbnail('Alquiler de Vehiculos','Nuestra Mutual trabaja junto a las dos más grandes empresas de cruceros',null,'http://mutualjerarquico.ddns.net/res/img/turismo/alquilerAuto.jpg',null,'modalCruceros'));
    
    this.cargarLogosCruceros(['7','2','3', '4','5','6', '1','8','9', '10','11','12','13', '14','15','16', '17','18','19', '20' ]);
  }

  //Genero el arreglo de imagenes de cruceros
  cargarLogosCruceros(imgs: string[]){
    for (let img of imgs){
      this.cruceros.push(img + '.jpg');
    }
  }

}
