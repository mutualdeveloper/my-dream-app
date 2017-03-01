import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemThumbnail } from './thumbnail.item.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ThumbnailService{
    //URL base de las imagenes de cruceros
    private pathImgs:string = "http://mutualjerarquico.ddns.net/res/img/turismo/cruceros/";
    private cruceros: string[] = [];

    constructor(private http: Http){
        this.cargarLogosCruceros(['7','2','3', '4','5','6', '1','8','9', '10','11','12','13', '14','15','16', '17','18','19', '20' ]);
    }

    //Genero el arreglo de imagenes de cruceros
      cargarLogosCruceros(imgs: string[]){
        for (let img of imgs){
          this.cruceros.push(this.pathImgs + img + '.jpg');
        }
      }

    getLogosCruceros(){
        return this.cruceros;
    }


    getThumbnails(){
        return this.http.get('http://mutualdepetroleros.tur.ar/backend/api/thumbnail').map(
            resp => this.toItemsCollection(resp.json())
        );
    }

    toItemsCollection(data){
        let thumbnailArray: ItemThumbnail[] = [];
        data.forEach(e => {
            thumbnailArray.push(this.newItem(e.titulo,e.texto,e.buttonText,e.imageRef,e.referencia,e.tipoReferencia));
        });
        return thumbnailArray;
    }

    newItem(titulo:string,texto:string,buttonText:string,imageRef:string,referencia:string,tipoReferencia:string){
        return new ItemThumbnail(titulo,texto,buttonText,imageRef,referencia,tipoReferencia );
    }
}