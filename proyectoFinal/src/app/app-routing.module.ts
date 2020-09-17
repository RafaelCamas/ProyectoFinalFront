import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BandFormComponent } from './components/bandForm/bandForm.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
  { path: 'profile', component: PerfilComponent },
  { path: 'login', component: FormularioComponent },
  { path: 'new', component: BandFormComponent },
  { path: '**', redirectTo: 'profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
