import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolosComponent } from './components/bolos/bolos.component';
import { DocesComponent } from './components/doces/doces.component';

@NgModule({
  declarations: [
    AppComponent,
    BolosComponent,
    DocesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
