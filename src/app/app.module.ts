import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './component/ng-style/ng-style.component';
import { CssComponent } from './component/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
