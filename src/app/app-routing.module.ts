import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { HomeComponent } from './home/home.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistreComponent } from './registre/registre.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'Nav',component:NavbarComponent},
  {path:'Home',component:HomeComponent},
  {path:'article',component:AddArticleComponent},
  {path:'login',component:LoginComponent},
  {path:'registre',component:RegistreComponent},
  {path:'list',component:ListArticleComponent },
  {path:'update/:id',component:UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
