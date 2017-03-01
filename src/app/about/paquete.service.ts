import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemPaquete } from './itemPaquete';

import 'rxjs/add/operator/map';

@Injectable()
export class PaqueteServices{
    constructor(public http:Http){}
    
    getPaquetes(){
        return this.http.get('http://mutualdepetroleros.tur.ar/backend//api/paquete').map(
            resp => this.toItemsCollection(resp.json())
        );
    }

    toItemsCollection(data){
        let paqueteArray: ItemPaquete[] = [];
        data.forEach(e => {
            paqueteArray.push(this.newItem(e.imageURL,e.title,e.descripcion))
        });
        return paqueteArray;
    }

    newItem(imageURL:string, title:string, descripcion:any){
        return new ItemPaquete(imageURL,title,descripcion);
    }
}