import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

export const authGuard: CanActivateFn = () => {
  const service = inject(AuthGuardService);
  const router = inject(Router);

  if(service.isAuthenticated() == true){
    return true
  }else{
    router.navigateByUrl('/login')
    return false;
  }
};



