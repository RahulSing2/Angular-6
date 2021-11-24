import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { DatabindComponent } from './myContainer/databind/databind.component';
import { ClassStyleComponent } from './myContainer/databind/class-style/class-style.component';
import { EventbindComponent } from './myContainer/databind/eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
