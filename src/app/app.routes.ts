import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { MorroBigComponent } from './layout/morro-big/morro-big.component';
import { MorroTxikiComponent } from './layout/morro-txiki/morro-txiki.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Home',
  },
  {
    path: 'morrocotuda',
    component: MorroBigComponent,
    title: 'Morrocotuda',
    pathMatch: 'full',
  },
  {
    path: 'morrocotuda-txiki',
    component: MorroTxikiComponent,
    title: 'Morrocotuda txiki',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: MainComponent,
    title: '',
  },
];
