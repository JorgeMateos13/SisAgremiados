import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
loginForm : FormGroup;

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        name: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  verFormatos(){
    this.router.navigate(['/formatos']);
  }

  verConvenios(){
    this.router.navigate(['/convenios']);
  }

  verConvocatorias(){
    this.router.navigate(['/convocatorias']);
  }

  login() {
    if (this.loginForm?.valid) {
      const name = this.loginForm.get('name')?.value;
      const password = this.loginForm.get('password')?.value;
  
      if (name && password) {
        this.authService.login(name, password).subscribe(
          (response) => {
            // Manejar la respuesta del servidor según tus necesidades
            // Por ejemplo, redirigir a la página de inicio si el inicio de sesión es exitoso
            this.router.navigate(['/panelad']);
          },
          (error) => {
            if (error.status === 401) {
              console.error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            } else {
              console.error('Error en el inicio de sesión', error);
            }
          }
        );
      } else {
        console.error('Nombre de usuario y/o contraseña no válidos.');
      }
    } else {
      // El formulario no es válido, puedes mostrar mensajes de validación o realizar otras acciones según tus necesidades
      console.error('Formulario no válido');
    }
  }
  
}
