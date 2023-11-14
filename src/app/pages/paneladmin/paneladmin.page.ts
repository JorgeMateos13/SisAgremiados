import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.page.html',
  styleUrls: ['./paneladmin.page.scss'],
})
export class PaneladminPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  formAgremiado(){
    this.router.navigate(['/formAgremiados']);
  }

  verAgremiado(){
    this.router.navigate(['/verAgremiado']);
  }

  verSolicitud(){
    this.router.navigate(['/verSolicitud']);
  }

  enviarAviso(){
    this.router.navigate(['/enviarAviso']);
  }

}
