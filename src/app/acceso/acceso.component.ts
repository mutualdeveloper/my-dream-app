import { Component, OnInit } from '@angular/core';
import {AccessService} from '../services/acceso.services';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css'],
  providers: [AccessService]

})
export class AccesoComponent implements OnInit {

  public dni:string;
  public numeroSocio:string;

  constructor(public accesoService: AccessService) {
     this.dni = '';
     this.numeroSocio = '';
   }

  ngOnInit() {

  }

  getAccess(){
    this.accesoService.obtenerAcceso(this.dni,this.numeroSocio).subscribe(
      response => {
        let rta = response;
        if (rta === 'success'){
          console.log('El acceso es correcto');
        }else{
          console.log('El acceso es incorrecto');
        }
      },
      error => console.error('Error '+ error)
    );
  }

  clicked(){
    if ((this.dni != '') && (this.numeroSocio != '')){
      this.getAccess();
    }else{
      console.log('datos vacios');
    }
  }


}
