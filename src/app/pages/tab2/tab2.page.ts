import { Component, OnInit } from "@angular/core";
import { Lista } from "src/app/modelos/lista.model";
import { TodosService } from "../../servicios/todos.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  listas: Lista[] = [];

  constructor(private todoService: TodosService) {
    this.listas = this.todoService.obtenerListas().filter(v => v.terminada);
  }
}
