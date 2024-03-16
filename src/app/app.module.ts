import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTestComponent } from './page/new-test/new-test.component';
import { NewPageComponent } from './page/new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTestComponent,
    NewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
