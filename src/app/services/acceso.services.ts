import { Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AccessService{
    constructor(public http: Http){}

    getAccess(){
        return this.http.get('http://mutualdepetroleros.com/api/convenios/?id=888').map(response => response.json());
    }

    obtenerAcceso(dni, socio){
        let data = new URLSearchParams();
        data.append('dni', dni);
        data.append('socio',socio);
        return this.http.post('http://mutualdepetroleros.tur.ar/api/sociovalido/index.php',data).map(response => response.json().respuesta);
    }
}