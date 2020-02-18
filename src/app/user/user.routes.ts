import {Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
