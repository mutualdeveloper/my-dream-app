import { ItemImageSalida} from '../estructuras/salida.image';
export class ItemSlider{
    constructor(
        public titulo:string,
        public subtitulo:string,
        public tipo:string,
        public imagenes: ItemImageSalida[]
    ){}
}