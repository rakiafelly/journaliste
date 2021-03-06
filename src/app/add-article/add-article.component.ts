import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm?: FormGroup;
  submitted = false;
  id: any;

  constructor(private articleService: ArticleService,private router:Router) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      Author: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required]),
    }

    )
  }
  Add() {
    this.submitted = true
    if(this.articleForm?.invalid){
      return;
    }
    this.articleService.createArticle(this.articleForm?.value)
      .subscribe((response: any) => {
        this.router.navigateByUrl('/list')
      }
        , (error: any) => { console.log('error') })
  }

}

