import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule  } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { SearchFunctionPipe } from './search-function.pipe';
import { FormsModule } from '@angular/forms';
import { SortFunctionPipe } from './sort-function.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchFunctionPipe,
    SortFunctionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
