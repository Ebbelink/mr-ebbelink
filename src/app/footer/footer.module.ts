import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from '../app.component';
import { FooterComponent } from './footer.component';

const COMPONENTS = [FooterComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FooterModule { }
