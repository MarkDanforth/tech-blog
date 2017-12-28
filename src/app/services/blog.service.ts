import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BlogPost } from './../models/blogPost.model';

import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getBlogs(): Observable<BlogPost[]> {
    return this.http.get('https://clockson-twitter.azurewebsites.net/api/mongo-fetch-latest?code=YzxZPrYWBD0Xqi8WrE7O/aa1E0DosXaKgpuw2ppZVkrtqh4lrsxEFA==')
      .map((response) => (response.json() as Object[]).map(val => new BlogPost(val)));
  }

  getBlogList(): Observable<BlogPost[]> {
    return this.http.get('https://clockson-twitter.azurewebsites.net/api/mongo-title-list?code=26aWYaUGckezOfv6rsFKzV2lal24laRCB8InCbJTXNrmWkKPJoR3AQ==')
      .map((response) => (response.json() as Object[]).map(val => new BlogPost(val)));
  }

  getBlogById(id: String): Observable<BlogPost> {
    return this.http.get('https://clockson-twitter.azurewebsites.net/api/mongo-blog-by-id?code=0vQdvcF62xGvc4feUeg/OOsiAezRfiEX8WjabElXjVq8mEp2Bb9UXA==&id=' + id)
      .map((response) => (new BlogPost(response.json() as Object)));
  }
}
