export class ListaElem {
    desc: string;
    completado: boolean;

    constructor(desc: string) {
        this.desc = desc;
        this.completado = false;
    }
}