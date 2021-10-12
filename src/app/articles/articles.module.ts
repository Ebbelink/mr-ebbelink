import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ArticlesComponent } from './articles.component';

const COMPONENTS = [ArticlesComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ArticlesModule { }
