import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AuthGuard } from './auth.guard';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'article', component: AddArticleComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'list', component: ListArticleComponent,canActivate:[AuthGuard] },
  { path: 'update/:id', component: UpdateComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
