import {Component, inject, Input} from '@angular/core';
import {User} from '../../../services/users/interfaces/users.interface';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;
  private readonly router = inject(Router);

  public goToInfo(): void {
    this.router.navigate([`user/${this.user.login}`], {state: {data: this.user}});
  }
}
