import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './bandForm.component.html',
  styleUrls: ['./bandForm.component.css'],
})
export class BandFormComponent implements OnInit {
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
