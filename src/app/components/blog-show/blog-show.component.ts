import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog.service';
import { BlogPost } from './../../models/blogPost.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent implements OnInit {

  public blogs: BlogPost[];

  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id'] != null) {
        this.blogs = new Array<BlogPost>();
        this.blogService.getBlogById(params['id']).subscribe((blog) => this.blogs.push(blog));   
      } else {
        this.blogService.getBlogs().subscribe((blogs) => this.blogs = blogs);
      }
    });

  }

}
