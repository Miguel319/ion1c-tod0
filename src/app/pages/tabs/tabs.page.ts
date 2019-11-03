import { Component } from "@angular/core";
import { TodosService } from "../../servicios/todos.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  constructor(private todoS: TodosService) {}
}
