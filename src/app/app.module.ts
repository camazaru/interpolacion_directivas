import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { MainlateralComponent } from './mainlateral/mainlateral.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { RegistroComponent } from './registro/registro.component';
import { MostrarocultarDirective } from './mostrarocultar.directive';



@NgModule({
  declarations: [
    AppComponent,
    MainheadComponent,
    MainlateralComponent,
    MainbodyComponent,
    MainfooterComponent,
    RegistroComponent,
    MostrarocultarDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
