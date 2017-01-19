import { Component, OnInit } from '@angular/core';
import { ItemPaquete} from './ItemPaquete';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  public paquetes: Array<ItemPaquete> = [];
  public refCotizador: string = 'http://www.mutualdepetroleros.tur.ar/servicios/ServiciosExternos/paquetes';
  constructor() { 
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/1.jpg','Cataratas del Iguazu', 'toma la descripción'));
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/2.jpg','Mendoza', 'toma la descripción 2'));
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/3.jpg','Norte argentino', 'toma la descripción 3'));
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/4.jpg','Punta Cana', 'toma la descripción 4'));
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/5.jpg','Río de Janeiro', 'toma la descripción 5'));
    this.paquetes.push(new ItemPaquete('http://mutualjerarquico.ddns.net/res/img/turismo/paquetes/6.jpg','Rivera Maya', 'toma la descripción 6'));
  }
}
