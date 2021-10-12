import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavComponent } from './nav.component';

const COMPONENTS = [NavComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports:[
    ...COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NavModule { }