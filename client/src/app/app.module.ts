import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from "./movie/movie.component";
import { OutputComponent } from "./output/output.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBoxComponent,
    MovieComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
