import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
articles:any
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getArticle().subscribe((response:any)=>{
      this.articles=response;
    },(error:any)=>{console.log(error)});
  }
  delete(id:any){
    this.articleService.deleteArticle(id).subscribe((response:any)=>{
      this.getAllArticles();
    },(error:any)=>{console.log(error)});
  }
}
