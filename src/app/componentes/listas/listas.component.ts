import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Lista } from "../../modelos/lista.model";
import { Router } from "@angular/router";
import { TodosService } from "../../servicios/todos.service";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  listas: Lista[];
  @Input() completada: boolean;
  @ViewChild(IonList, { static: true }) lista: IonList;

  constructor(
    private router: Router,
    private todoS: TodosService,
    private alertCtrl: AlertController
  ) {}

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

  async editarTitulo(elem: Lista) {
    const alert = await this.alertCtrl.create({
      header: `Editar ${elem.titulo}`,
      inputs: [
        {
          name: "titulo",
          value: elem.titulo,
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => this.lista.closeSlidingItems()
        },
        {
          text: "Editar",
          handler: data => {
            if (data.titulo.length === 0) return;

            elem.titulo = data.titulo;
            this.todoS.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }
}
