import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  verFormatos(){
    this.router.navigate(['/formatos']);
  }

  verConvenios(){
    this.router.navigate(['/convenios']);
  }

  verConvocatorias(){
    this.router.navigate(['/convocatorias']);
  }

  login(){
    this.router.navigate(['/panelad']);
  }
}
