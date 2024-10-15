import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';

export const scoreGuard: CanActivateFn = (route, state) => {
  const userService = inject(UsersService);
  const login = route.paramMap.get('login');
  const user = userService.users.find(user => user.login === login);
  return user!.score > 0.3;
};
