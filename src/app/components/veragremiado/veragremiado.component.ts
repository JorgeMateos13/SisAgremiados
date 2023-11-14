import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-veragremiado',
  templateUrl: './veragremiado.component.html',
  styleUrls: ['./veragremiado.component.scss'],
})
export class VeragremiadoComponent  implements OnInit {
  agremiados: any[] = [];  

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.obtenerAgremiados();  // Llama a la función para obtener agremiados al iniciar el componente
  }

  obtenerAgremiados() {
    this.authService.getAgremiados().subscribe(
      (data) => {
        this.agremiados = data;
        console.log('Agremiados obtenidos con éxito', this.agremiados);
      },
      (error) => {
        console.error('Error al obtener agremiados', error);
      }
    );
  }
}