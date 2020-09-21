import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlDirective,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './bandForm.component.html',
  styleUrls: ['./bandForm.component.css'],
})
export class BandFormComponent implements OnInit {
  band: FormGroup;
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
    this.band = new FormGroup({
      bandName: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  collectBandData(band): any {
    const result = this.servicioService.addBand(this.band.value);
  }
}
