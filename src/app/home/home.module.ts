import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';

const COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }
