import { Routes } from '@angular/router';
import {scoreGuard} from './shared/guards/score/score.guard';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent), pathMatch: 'full'},
  {path: 'user/:login', canActivate: [scoreGuard], loadComponent: () => import('./user-info/user-info.component').then(m => m.UserInfoComponent)},
  {path: '*', redirectTo: '', pathMatch: 'full'},
];
