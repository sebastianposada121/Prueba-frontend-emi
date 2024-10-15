import {Inject, Injectable} from '@angular/core';
import {BASE_URL} from '../../app.config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {User, UserInfo, UserResponse, UserSearchParams} from './interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private httpClient: HttpClient,
  ) { }

  private set users(users: User[]) {
    this._users = users;
  }

  public get users() {
    return this._users;
  }

  public userInfo(name: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(`${this.baseUrl}/users/${name}`);
  }

  public userSearch({params}: UserSearchParams): Observable<UserResponse>{
    return this.httpClient.get<UserResponse>(this.baseUrl + '/search/users', {params}).pipe(tap((response) => {
      this.users = response.items;
    }));
  }

}
