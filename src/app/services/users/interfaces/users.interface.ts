import {HttpParams} from '@angular/common/http';

export class UserSearchParams {
  private _page!: number;
  private _perPage!: number;
  private _name!: string;

  constructor({name = '', page = 1, perPage = 10}: { name: string, page?: number, perPage?: number }) {
    this._page = page;
    this._perPage = perPage;
    this._name = name;
  }

  public get page(): number {
    return this._page;
  }

  public get params(): HttpParams {
    return new HttpParams().appendAll({q: this._name, page: this._page, per_page: this._perPage});
  }

}

export interface UserResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface UserInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
