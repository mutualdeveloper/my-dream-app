import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemMenuBar } from './menubar.item.model';

import 'rxjs/add/operator/map';

@Injectable()
export class MenubarServices{
    constructor(public http:Http){}
    
    getMenus(){
        return this.http.get('http://mutualdepetroleros.tur.ar/backend/api/menu').map(
            resp => this.toItemsCollection(resp.json())
        );
    }

    toItemsCollection(data){
        let menuArray: ItemMenuBar[] = [];
        data.forEach(e => {
            menuArray.push(this.newItem(e.texto,e.childItems,e.referencia))
        });
        return menuArray;
    }

    newItem(texto:string, childItems: ItemMenuBar[], ref:string){
        return new ItemMenuBar(texto, childItems,ref);
    }
}