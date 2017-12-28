import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog.service';
import { BlogPost } from './../../models/blogPost.model';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.css']
})
export class BlogMenuComponent implements OnInit {

  public blogList: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogList().subscribe((blogs) => this.blogList = blogs);
  }

}
