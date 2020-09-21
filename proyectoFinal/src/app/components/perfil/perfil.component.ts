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
  usuarios: Usuario;
  arrBands: any;
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarios = this.servicioService.getUserById(1);
    this.getAllBands();
  }

  async getAllBands(): Promise<void> {
    const bandList = await this.servicioService.getAllBands();
    console.log('Band list', bandList);
    this.arrBands = bandList;
  }

  async deleteBand(pBand): Promise<any> {
    const result = await this.servicioService.deleteBand(pBand);
  }
  async modifyBand(): Promise<any> {
    // const result = await this.servicioService.modifyBand();
  }
}
