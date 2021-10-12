import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: "articles", component: ArticlesComponent },
  { path: "articles/:semicolonSeperatedCategories", component: ArticlesComponent },
  { path: "article/:articleIdentifier", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
