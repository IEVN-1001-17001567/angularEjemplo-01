import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    // FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
