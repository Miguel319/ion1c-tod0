import { Component, OnInit } from "@angular/core";
import { TodosService } from "../../servicios/todos.service";
import { ActivatedRoute } from "@angular/router";
import { Lista } from "../../modelos/lista.model";
import { ListaElem } from "../../modelos/lista.elem.model";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"]
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = "";

  constructor(private todoS: TodosService, private aRoute: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerLista();
    console.log(this.lista);
  }

  obtenerLista() {
    const listaId = this.aRoute.snapshot.paramMap.get("listaId");
    return (this.lista = this.todoS.obtenerLista(listaId));
  }

  agregarElem() {
    if (this.nombreItem.length === 0) return;

    const nuevoElem = new ListaElem(this.nombreItem);
    this.lista.elems.push(nuevoElem);

    this.nombreItem = "";
    this.todoS.guardarStorage();
  }

  cambioElem() {
    const pendientes = this.lista.elems.filter(v => !v.completado);

    if (pendientes.length === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.todoS.guardarStorage();

    console.log(this.todoS.obtenerListas());
    
  }
}
