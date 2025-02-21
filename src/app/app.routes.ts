import { Routes } from '@angular/router';
import { PrebodaComponent } from './screens/preboda/preboda.component';
import { BodaComponent } from './screens/boda/boda.component';
import { QuienSomosComponent } from './screens/quien-somos/quien-somos.component';
import { TransporteComponent } from './screens/transporte/transporte.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  { path: 'preboda', component: PrebodaComponent },
  { path: 'boda', component: BodaComponent },
  { path: 'quien-somos', component: QuienSomosComponent },
  { path: 'transporte', component: TransporteComponent },
];
