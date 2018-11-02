import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AcomComponent } from './acom/acom.component';
import { AchildComponent } from './acom/achild/achild.component';
import { BcomComponent } from './bcom/bcom.component';
import { BchilComponent } from './bcom/bchil/bchil.component';
import { SermService } from './serm.service';


@NgModule({
  declarations: [
    AppComponent,
    AcomComponent,
    AchildComponent,
    BcomComponent,
    BchilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SermService],
  bootstrap: [AppComponent]
})
export class AppModule { }
