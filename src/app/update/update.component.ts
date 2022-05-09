import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  articleForm?: FormGroup;
  id: any;
  submitted = false;

  constructor(private articleService: ArticleService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentArticle();
    this.articleForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required]),
      Author: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required]),
    }
    )
  }
  getCurrentArticle() {
    this.id = this.activateRoute.snapshot.params['id']
    this.articleService.getArticleById(this.id).subscribe((response: any) => {
      // console.log(response);
      this.articleForm?.patchValue(response);
    }, (error: any) => { console.log(error) });
  }

  update() {
    this.submitted = true
    if (this.articleForm?.invalid) {
      return;
    }
    this.articleService.updateArticle(this.id, this.articleForm?.value)
      .subscribe((response: any) => {
        // console.log(response);
        this.router.navigateByUrl('/list')
      
      }, (error: any) => { console.log(error) });
  }
}
