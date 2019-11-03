import { Component } from "@angular/core";
import { TodosService } from "../../servicios/todos.service";
import { Lista } from '../../modelos/lista.model';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  lista: Lista[];
  
  constructor(private todoS: TodosService) {
    this.lista = todoS.obtenerListas();
  }
}
