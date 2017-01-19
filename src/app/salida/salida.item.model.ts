export class ItemSalida{
    constructor(
        public id:number,
        public titulo:string,
        public aclaracionTitulo:string,
        public incluye:string,
        public condiciones:string,
        public imagenes:Array<string>,
        public precio:number
    ){}
}