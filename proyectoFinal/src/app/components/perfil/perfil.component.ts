import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Band } from 'src/app/models/band';
import { Usuario } from 'src/app/models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  arrBands: Band[];
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioService.getuserById(1);
    this.arrBands = this.servicioService.getAllBands();
  }
}
