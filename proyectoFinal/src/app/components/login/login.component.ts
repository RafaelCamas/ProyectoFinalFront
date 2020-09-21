import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  login: FormGroup;
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
    this.login = new FormGroup({
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.\S+$/),
      ]),
    });
  }

  ngOnInit(): void {}
  async verify(): Promise<any> {
    const result = await this.servicioService.verify(this.login.value);
  }
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
