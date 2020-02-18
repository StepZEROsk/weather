import {Routes} from '@angular/router';
import {AuthGuard} from './common/auth/auth.guard';
import {userRoutes} from './user/user.routes';
import {weatherRoutes} from './weather/weather.routes';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'user',
    children: userRoutes,
  },
  {
    path: 'weather',
    children: weatherRoutes,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
