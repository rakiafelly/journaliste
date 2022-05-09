import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  createArticle(data:any){
   return this.http.post("http://localhost:3000/article",data)
  }

  getArticle(){
    return this.http.get("http://localhost:3000/article" )
  }

  deleteArticle(id:any){
    return this.http.delete("http://localhost:3000/article/"+id);

  }
getArticleById(id:any){
  return this.http.get("http://localhost:3000/article/"+id)


}
  updateArticle(id:any,data:any){
    return this.http.put("http://localhost:3000/article/"+id,data )

  }
}
