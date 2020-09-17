import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.\S+$/),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
      ]),
    });
  }

  ngOnInit(): void {}
  async collectData() {
    const result = this.servicioService.addUser(this.form.value);
    localStorage.setItem('token', result.token);
    localStorage.setItem('userId', result.userId);
  }
}
