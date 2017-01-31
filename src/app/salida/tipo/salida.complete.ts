import {ItemImageSalida} from '../estructuras/salida.image';
import {ItemTexto} from '../estructuras/salida.texto';

export class ItemComplete{
    constructor(
        public titulo:string,
        public subtitulo:string,
        public precio:string,
        public tipo:string,
        public imagenes: ItemImageSalida[],
        public textos: ItemTexto[]
    ){}
}