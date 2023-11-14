import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'http://localhost:8000/api'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(name: string, password: string): Observable<any> {
    const body = { name: name, password: password };
    return this.http.post(`${Url}/newLogin`, body);
  }

  addAgremiado(
    nombre: string, apellido_p: string, apellido_m: string,
    id_genero: number, NUE: string, NUP: string, RFC: string,
    NSS: string, fecha_nacimiento: string, telefono: number,
    cuota: number, id_rol: number
  ): Observable<any> {
    const agremiado = {
      nombre: nombre,
      apellido_p: apellido_p,  // Corregido aquí
      apellido_m: apellido_m,
      id_genero: id_genero,
      NUE: NUE,
      NUP: NUP,
      RFC: RFC,
      NSS: NSS,
      fecha_nacimiento: fecha_nacimiento,
      telefono: telefono,
      cuota: cuota,
      id_rol: id_rol
    };
    return this.http.post(`${Url}/NewAgremiado`, agremiado);
  }

  getAgremiados(): Observable<any> {
    return this.http.get(`${Url}/getAgremiados`);
  }
  
}
