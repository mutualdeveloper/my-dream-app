import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { ItemComplete} from './tipo/salida.complete';
import { ItemFlyer} from './tipo/salida.flyer';
import { ItemSlider} from './tipo/salida.slider';
import { ItemImageSalida} from './estructuras/salida.image';
import { ItemTexto} from './estructuras/salida.texto';

import 'rxjs/add/operator/map';

@Injectable()
export class SalidaService{
    constructor(public http:Http){}
    
    getPost(id){
        return this.http.get('http://mutualdepetroleros.tur.ar/backend/api/post/?id='+id).map(
            resp => this.getItem(resp.json())
        );
    }

    getItem(data):any{
        switch (data.tipo) {
            case 'flyer':
                return this.newFlyer(data.image,data.subtitulo,data.titulo,data.tipo);
            case 'slider':
                return this.newSlider(data.titulo,data.subtitulo,this.newImageCollection(data.images),data.tipo);
            case 'complete':
                return this.newComplete(data.titulo,data.subtitulo,data.precio,this.newImageCollection(data.images),this.newTextCollection(data.informacion),data.tipo);
        }
       
    }

    newComplete(titulo:string,subtitulo:string, precio:string, imagenes: ItemImageSalida[], textos: ItemTexto[],tipo:string){
        return new ItemComplete(titulo,subtitulo,precio,tipo,imagenes,textos);
    }

    newFlyer(image:string,subtitulo:string,titulo:string,tipo:string){
        return new ItemFlyer(titulo,subtitulo,image,tipo);
    }

    newSlider(titulo:string, subtitulo:string, imagenes: ItemImageSalida[],tipo:string){
        return new ItemSlider(titulo,subtitulo,tipo,imagenes);
    }

    newImageCollection(data){
        let arrayImages: ItemImageSalida[] = [];
        data.forEach(e => {
            arrayImages.push(new ItemImageSalida(e.url,e.alt))
        });
        return arrayImages;
    }

    newTextCollection(data){
        let arrayTexto: ItemTexto[] = [];
        data.forEach(e => {
            arrayTexto.push(new ItemTexto(e.titulo,e.parrafo))
        });
        return arrayTexto;
    }



}