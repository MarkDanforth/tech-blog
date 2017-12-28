import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GithubRepo } from './../models/githubRepo.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CodeService {

  constructor(private http: Http) { }

  getRepoList(): Observable<GithubRepo[]> {
    return this.http.get('https://clockson-twitter.azurewebsites.net/api/github-get-repo-list?code=piIDdVEixzs9jualmD4QTqJHpRH5Rb1sFjachESCkCO98PCEvw0YNw==&accountname=MarkDanforth')
      .map((response) => (response.json() as Object[]).map(val => new GithubRepo(val)));
  }
}
