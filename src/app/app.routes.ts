import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then( m => m.HomeComponent ),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then( m => m.ProfileComponent ),
    // canActivate: [ authGuardFn ]
    canActivate: [ roleGuard ],
    data: { roles: ['admin', 'editor', 'super-user'] }
  },

  {
    path: '**',
    redirectTo: '',
  }


];
