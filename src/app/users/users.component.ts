import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {UserResponse, UserSearchParams} from '../services/users/interfaces/users.interface';
import {UserCardComponent} from './components/user-card/user-card.component';
import {PaginationComponent} from '../shared/components/pagination/pagination.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SearchComponent} from '../shared/components/search/search.component';
import {FollowersGraphComponent} from './components/followers-graph/followers-graph.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserCardComponent,
    PaginationComponent,
    FormsModule,
    ReactiveFormsModule,
    SearchComponent,
    FollowersGraphComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  @ViewChild('followersChart') followersGraph!: FollowersGraphComponent;
  private readonly usersService: UsersService = inject(UsersService);
  public currentPage: number = 1;
  public readonly nameControl = new FormControl<string | null>(null, [Validators.required, Validators.minLength(5), Validators.pattern( /^(?!.*gcpglobal).*$/i)]);
  public userResponse: UserResponse = {
    incomplete_results: false,
    items: [],
    total_count: 0,
  };

  private getUsersInfo(): void{
    this.userResponse.items.forEach(item => {
      this.usersService.userInfo(item.login).subscribe({
        next: ({login, followers}) => {
          this.followersGraph.addUserFollowers({user: login, followers});
        }
      });
    })
  }

  private getUsers(): void {
    this.followersGraph?.clear();
    const page: number = this.currentPage;
    const name: string = this.nameControl.getRawValue()??'sebastian';
    const params = new UserSearchParams({name, page});
    this.usersService.userSearch(params)
      .subscribe({
        next: response => {
          this.userResponse = response;
          this.currentPage = params.page;
          this.getUsersInfo();
        }
      });
  }

  public changePage(page: number): void {
    this.currentPage = page;
    this.getUsers();
  }

  public searchUsersByName(): void{
    if (this.nameControl.valid){
      this.currentPage = 1;
      this.getUsers();
    }
  }

  ngOnInit() {
    this.getUsers();
  }

}
