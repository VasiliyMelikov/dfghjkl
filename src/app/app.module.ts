  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { VtoroiComponent } from './vtoroi/vtoroi.component';
import { BezkostilyanikakComponent } from './bezkostilyanikak/bezkostilyanikak.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    VtoroiComponent,
    BezkostilyanikakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }