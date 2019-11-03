import { Injectable } from "@angular/core";
import { Lista } from "../modelos/lista.model";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  private listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista("Take a shower");
    const lista2 = new Lista("Do the dishes");

    this.listas.push(lista1, lista2);
  }

  obtenerListas(): Lista[] {
    return this.listas;
  }
}
