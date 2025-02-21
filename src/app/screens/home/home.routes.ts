import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';

export const HOME_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'formulario', component: FormularioComponent },
];
