import { Component, OnInit } from '@angular/core';
import { CodeService } from './../../services/code.service';
import { GithubRepo } from './../../models/GithubRepo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  public repos: GithubRepo[];

  constructor(private codeService: CodeService) { }

  ngOnInit() {
    this.codeService.getRepoList().subscribe((repos) => this.repos = repos);
  }

}
