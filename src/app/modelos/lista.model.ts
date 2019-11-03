import { ListaElem } from './lista.elem.model';
export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    elems: ListaElem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.elems = [];
        this.id = new Date().getTime();
    }
}