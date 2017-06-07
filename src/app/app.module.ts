import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PagingComponent} from './components/paging-component/paging-component.component';
import {PagingService} from './service/paging-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
