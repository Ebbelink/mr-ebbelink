import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from '../app.component';
import { ArticleComponent } from './article.component';

const COMPONENTS = [ArticleComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
  ],
  exports:[
    ...COMPONENTS,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ArticleModule { }
