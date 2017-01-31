import { Component, OnInit } from '@angular/core';
import { ItemPaquete} from './ItemPaquete';
import { PaqueteServices} from './paquete.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [PaqueteServices]
})

export class AboutComponent {
  public paquetes: Array<ItemPaquete> = [];
  public refCotizador: string = 'http://www.mutualdepetroleros.tur.ar/servicios/ServiciosExternos/paquetes';
  constructor(private paqueteService: PaqueteServices) { 
    this.obtenerPaquetes();
  }

  obtenerPaquetes(){
    this.paqueteService.getPaquetes().subscribe(
      resp => this.paquetes = resp,
      error => console.log(error)
    );
  }
}
