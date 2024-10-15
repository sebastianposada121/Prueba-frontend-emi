import {Component, inject, OnInit} from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {UserInfo} from '../services/users/interfaces/users.interface';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule,
    FaIconComponent,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit{
  private readonly usersService: UsersService = inject(UsersService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  public userInfo!: UserInfo;
  public faReturn = faArrowAltCircleLeft;

  private getUserInfo(): void {
    const name: string = this.route.snapshot.paramMap.get('login')??'';
    this.usersService.userInfo(name).subscribe(response => {
      this.userInfo = response;
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
}
