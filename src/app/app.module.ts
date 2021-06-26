import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialDesign} from './Material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoverComponent } from './cover/cover.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CorauselComponent } from './corausel/corausel.component';
import { BoostrapMaterial } from './Material/Boostrap';



@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    LoginComponent,
    RegisterComponent,
    CorauselComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialDesign,
    HttpClientModule,
    BoostrapMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
