import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';




export const roleGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );

  // const rolesToCheck = ['admin', 'editor', 'super-user', 'user'];
  const rolesToCheck = route.data['roles'] as string[] ?? [];



  return authService.user$.pipe(
    map( user => {
      if ( !user ) return false;

      const isRoleMatched = rolesToCheck.some(
        role => user[ 'customRoles' ].includes( role )
      );

        console.log({isRoleMatched});
      return isRoleMatched;
    })
  )




};
