import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogShowComponent } from './../components/blog-show/blog-show.component';
import { TwitterTimelineComponent } from './../components/twitter-timeline/twitter-timeline.component';
import { AboutComponent } from './../components/about/about.component';
import { CodeComponent } from './../components/code/code.component';

const routes: Routes = [
  {
    path: '',
    component: BlogShowComponent
  },
  { path: 'blog/:id',  component: BlogShowComponent },
  { path: 'twitter/timeline',  component: TwitterTimelineComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'code', component: CodeComponent },
  /*{ path: 'intro/:stepId', component: IntroComponent, resolve: { script: ScriptResolve } },
  { path: 'intro-radio-broadcast/:stepId', component: IntroRadioBroadcastComponent, resolve: { script: ScriptResolve } },*/
  { path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
