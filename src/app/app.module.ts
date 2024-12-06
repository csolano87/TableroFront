import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableroComponent } from './tablero/tablero.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
   HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
