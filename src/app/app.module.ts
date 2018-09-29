import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HttpModule } from '@angular/http';
import{FormsModule} from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { FocusDirective } from './focus.directive'

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    ItemComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
