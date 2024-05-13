import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaOrdenadoresComponent } from './lista-ordenadores/lista-ordenadores.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioComponent,ListaOrdenadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosDia13-05';
}
