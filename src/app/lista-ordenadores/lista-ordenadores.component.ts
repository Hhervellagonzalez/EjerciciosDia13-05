import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../_modelo/Ordenador';
import { OrdenadorServiceService } from '../_servicio/ordenador-service.service';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
    selector: 'app-lista-ordenadores',
    standalone: true,
    templateUrl: './lista-ordenadores.component.html',
    styleUrl: './lista-ordenadores.component.css',
    imports: [FormularioComponent]
})
export class ListaOrdenadoresComponent implements OnInit{
  ordenadores: Ordenador[] = [];
  ordenadorSeleccionado: Ordenador | null = null;
  mostrarFormulario: boolean = false;

  constructor(private ordenadorService: OrdenadorServiceService) {}

  ngOnInit() {
    this.actualizarLista();
  }

  eliminarOrdenador(id: number) {
    this.ordenadorService.eliminarOrdenador(id).subscribe(() => {
      this.actualizarLista();
    });
  }

  editarOrdenador(ordenador: Ordenador) {
    this.ordenadorSeleccionado = ordenador;
    this.mostrarFormulario = true;
  }

  verFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  actualizarLista() {
    this.ordenadorService.obtenerOrdenadores().subscribe((ordenadores: Ordenador[]) => {
      this.ordenadores = ordenadores;
    });
  }
}