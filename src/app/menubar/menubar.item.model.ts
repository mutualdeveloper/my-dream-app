export class ItemMenuBar{
    constructor(
        public texto:string,
        public childItems: ItemMenuBar[],
        public ref:string
    ){}
}