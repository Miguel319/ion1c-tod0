import { Injectable } from "@angular/core";
import { Lista } from "../modelos/lista.model";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  private listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  obtenerListas(): Lista[] {
    return this.listas;
  }

  obtenerLista(id: string | number): Lista {
    return this.listas.find(lista => lista.id === Number(id));
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  guardarStorage() {
    localStorage.setItem("lista", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("lista"))
      this.listas = JSON.parse(localStorage.getItem("lista"));
  }
}
