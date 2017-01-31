import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemFooter } from './footer.item';

import 'rxjs/add/operator/map';

@Injectable()
export class FooterService{
    constructor(public http:Http){}
    
    getFooterData(){
        return this.http.get('http://localhost/backend/api/footer').map(
            resp => this.toItemsCollection(resp.json())
        );
    }

    toItemsCollection(data){
        let footerArray: ItemFooter[] = [];
        data.forEach(e => {
            footerArray.push(this.newItem(e.texto,e.referencia,e.icono,e.tipo))
        });
        return footerArray;
    }

    newItem(texto:string, referencia:string, icono:string, tipo:string){
        return new ItemFooter(texto,referencia,icono,tipo);
    }

    getFooterType(){
        return this.http.get('http://localhost/backend/api/tipofooter').map(
            resp => this.toItemTypeCollection(resp.json())
        );    
    }

    toItemTypeCollection(data){
        let arrayType: string[] = [];
        data.forEach(e => arrayType.push(e.nombre));
        return arrayType;
    }
}