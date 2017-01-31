import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemCustomer } from './customer.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CustomerServices{
    constructor(public http:Http){}
    
    getCustomerData(){
        return this.http.get('http://localhost/backend/api/aereo').map(
            resp => this.toItemsCollection(resp.json()[0])
        );
    }

    toItemsCollection(data){

        return new ItemCustomer(data.titulo, data.descripcion,data.btnTitulo,data.refCotizador);
    }

}