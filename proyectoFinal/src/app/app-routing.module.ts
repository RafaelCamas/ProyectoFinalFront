import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BandFormComponent } from './components/bandForm/bandForm.component';
import { LoginComponent } from './components/login/login.component';
import { AllguardGuard } from './guards/allguard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
  { path: 'profile', component: PerfilComponent, canActivate: [AllguardGuard] },
  { path: 'register', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: BandFormComponent, canActivate: [AllguardGuard] },
  { path: '**', redirectTo: 'profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
