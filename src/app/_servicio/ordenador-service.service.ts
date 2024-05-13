import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Ordenador } from '../_modelo/Ordenador';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorServiceService {
  private ordenadoresSubject: BehaviorSubject<Ordenador[]> = new BehaviorSubject<Ordenador[]>([]);
  ordenadoresObs: Observable<Ordenador[]> = this.ordenadoresSubject.asObservable();

  constructor() {}

  agregarOrdenador(ordenador: Ordenador): Observable<void> {
    const ordenadores = this.ordenadoresSubject.getValue();
    ordenadores.push(ordenador);
    this.ordenadoresSubject.next(ordenadores);
    return of(undefined);
  }

  obtenerOrdenadores(): Observable<Ordenador[]> {
    return this.ordenadoresObs;
  }

  eliminarOrdenador(id: number): Observable<void> {
    const ordenadores = this.ordenadoresSubject.getValue();
    const ordenadoresActualizados = ordenadores.filter(ordenador => ordenador.idOrdenador !== id);
    this.ordenadoresSubject.next(ordenadoresActualizados);
    return of(undefined);
  }
  actualizarOrdenador(ordenador: Ordenador): Observable<void> {
    const ordenadores = this.ordenadoresSubject.getValue();
    const index = ordenadores.findIndex(o => o.idOrdenador === ordenador.idOrdenador);
    if (index !== -1) {
      ordenadores[index] = ordenador;
      this.ordenadoresSubject.next(ordenadores);
    }
    return of(undefined);
  }
}