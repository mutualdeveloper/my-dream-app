import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemSliderBar } from './sliderbar.item.model';

import 'rxjs/add/operator/map';

@Injectable()
export class SliderbarService{
    constructor(public http: Http){}

    getSliderbar(){
        return this.http.get('http://mutualdepetroleros.tur.ar/backend/api/carousel').map(
            resp => this.toItemsCollection(resp.json())
        );
    }

    toItemsCollection(data){
        let slidersArray: ItemSliderBar[] = [];
        data.forEach(e => {
           slidersArray.push(this.newItem(e.imgRef,e.titulo,e.descripcion, e.buttonText,e.buttonRef))
        });
        return slidersArray;
    }

    newItem(imageRef:string, titulo:string, descripcion:string, buttonText:string, buttonRef:string){
        return new ItemSliderBar(imageRef,titulo,descripcion,buttonText,buttonRef);
    }

}