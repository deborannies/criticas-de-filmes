import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUserValue) {
    // Logado, então permite o acesso
    return true;
  }

  // Não logado, então redireciona para a página de login
  router.navigate(['/login']);
  return false;
};