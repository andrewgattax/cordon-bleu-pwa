import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './notfound/not-found.component';
import {OrdiniComponent} from './ordini/ordini.component';
import {AuthGuard} from './core/guards/auth.guard';
import {LoggedGuard} from './core/guards/logged.guard';
import {NewOrderComponent} from './new-order/new-order.component';

export const routes: Routes = [
  {
    'path': '',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    'path': 'home',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    'path': 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard]
  },
  {
    'path': 'ordini',
    component: OrdiniComponent,
    canActivate: [AuthGuard]
  },
  {
    'path': 'ordina',
    component: NewOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    'path': '**',
    component: NotFoundComponent
  }
];
