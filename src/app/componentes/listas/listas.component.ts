import { Component, OnInit, Input } from "@angular/core";
import { Lista } from "../../modelos/lista.model";
import { Router } from "@angular/router";
import { TodosService } from "../../servicios/todos.service";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  listas: Lista[];
  @Input() completada: boolean;

  constructor(private router: Router, private todoS: TodosService) {}

  ngOnInit() {}

  obtenerListas(): Lista[] {
    return (this.listas = this.completada
      ? this.todoS.obtenerListas().filter(v => v.terminada)
      : this.todoS.obtenerListas().filter(v => !v.terminada));
  }

  listaSeleccionada(lista: Lista) {
    const tab = !this.completada ? "tab1" : "tab2";
    this.router.navigateByUrl(`/tabs/${tab}/agregar/${lista.id}`);
  }

  eliminar(elem: Lista) {
    this.todoS.eliminarLista(elem);
  }
}
