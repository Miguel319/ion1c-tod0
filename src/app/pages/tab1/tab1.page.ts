import { Component } from "@angular/core";
import { TodosService } from "../../servicios/todos.service";
import { Lista } from "../../modelos/lista.model";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  lista: Lista[];

  constructor(
    private todoS: TodosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.lista = todoS.obtenerListas();
  }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: "Nueva lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Crear",
          handler: data => {
            if (data.titulo.length === 0) return;

            const listaId = this.todoS.crearLista(data.titulo);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    await alert.present();
  }

  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }
}
