import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { BlogShowComponent } from './components/blog-show/blog-show.component';
import { NavBlocksComponent } from './components/nav-blocks/nav-blocks.component';

import { BlogService } from './services/blog.service';
import { CodeService } from './services/code.service';

import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { TwitterTimelineComponent } from './components/twitter-timeline/twitter-timeline.component';
import { AboutComponent } from './components/about/about.component';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogShowComponent,
    NavBlocksComponent,
    BlogMenuComponent,
    TwitterTimelineComponent,
    AboutComponent,
    CodeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BlogService,
    CodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
