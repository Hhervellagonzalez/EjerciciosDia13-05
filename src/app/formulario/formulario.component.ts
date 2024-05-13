import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ordenador } from '../_modelo/Ordenador';
import { OrdenadorServiceService } from '../_servicio/ordenador-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  @Input() ordenador: Ordenador | null = null;
  @Output() formSubmitted = new EventEmitter<void>();

  ordenadorForm: FormGroup;
  mostrarFormulario: boolean = true;

  constructor(private formulario: FormBuilder, private ordenadorService: OrdenadorServiceService, private router: Router) {
    this.ordenadorForm = this.formulario.group({
      idOrdenador: ['', [Validators.required]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      procesador: ['', [Validators.required, Validators.minLength(2)]],
      ram: ['', [Validators.required]]
    });
  }

  ngOnChanges() {
    if (this.ordenador) {
      this.ordenadorForm.patchValue(this.ordenador);
    }
  }

  onSubmit() {
    if (this.ordenadorForm.valid) {
      const ordenador: Ordenador = this.ordenadorForm.value;
      if (this.ordenador) {
        this.ordenadorService.actualizarOrdenador(ordenador).subscribe(() => {
          this.ordenadorForm.reset();
          this.router.navigate(['/lista']);
          this.formSubmitted.emit();
        });
      } else {
        this.ordenadorService.agregarOrdenador(ordenador).subscribe(() => {
          this.ordenadorForm.reset();
          this.router.navigate(['/lista']);
          this.formSubmitted.emit();
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  verFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
}