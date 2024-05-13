import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaOrdenadoresComponent } from './lista-ordenadores/lista-ordenadores.component';

export const routes: Routes = [ 
{ path: '', component: ListaOrdenadoresComponent }, 
{ path: 'formulario', component: FormularioComponent }
];
