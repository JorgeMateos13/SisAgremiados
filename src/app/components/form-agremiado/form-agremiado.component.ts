import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-agremiado',
  templateUrl: './form-agremiado.component.html',
  styleUrls: ['./form-agremiado.component.scss'],
})
export class FormAgremiadoComponent implements OnInit {
  agregiadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.agregiadoForm = this.fb.group({
      apellido_p: ['', Validators.required],
      apellido_m: ['', Validators.required],
      nombre: ['', Validators.required],
      NUP: ['', Validators.required],
      NUE: ['', Validators.required],
      RFC: ['', Validators.required],
      NSS: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      telefono: [, Validators.required],
      cuota: [, Validators.required],
      id_genero: [, Validators.required],
      id_rol: [, Validators.required],
    });
  }

  ngOnInit() {}

  backPanel() {
    this.router.navigate(['/panelad']);
  }

  agregarAgremiado() {
    // Obtén los valores del formulario
    const {
      apellido_p,
      apellido_m,
      nombre,
      NUP,
      NUE,
      RFC,
      NSS,
      fecha_nacimiento,
      telefono,
      cuota,
      id_genero,
      id_rol
    } = this.agregiadoForm.value;

    // Llama a la función addAgremiado del servicio AuthService
    this.authService.addAgremiado(
        nombre,
        apellido_p,
        apellido_m,
        id_genero,
        NUE,
        NUP,
        RFC,
        NSS,
        fecha_nacimiento,
        telefono,
        cuota,
        id_rol
      )
      .subscribe(
        (respuesta) => {
          // Maneja la respuesta del servidor según tus necesidades
          console.log('Agremiado agregado exitosamente', respuesta);
        },
        (error) => {
          // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
          console.error('Error al agregar agremiado', error);
        }
      );
  }

  submit() {}
}
