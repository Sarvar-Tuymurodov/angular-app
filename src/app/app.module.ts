import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import {Select2Module} from "ng-select2-component";
import {HttpClientModule} from "@angular/common/http";
import { FilterUsersPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Select2Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
