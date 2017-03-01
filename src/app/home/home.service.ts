import { Injectable} from '@angular/core';
import { Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HomeService{
    constructor(public http:Http){}

     getModoMantenimiento(){
        return this.http.get('http://www.mutualdepetroleros.tur.ar/backend/api/Modo_Mantenimiento').map(
            resp => resp.json()
        );
    }
}