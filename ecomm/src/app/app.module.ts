import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './site-lay-out/footer/footer.component';
import { HeaderComponent } from './site-lay-out/header/header.component';
import { SiteLayOutModule } from './site-lay-out/site-lay-out.module';
import { HttpClientModule } from '@angular/common/http'//step4
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteLayOutModule,
    HttpClientModule,//step3
    ReactiveFormsModule,//formstep1
    FormsModule//editstep3.1//searchStep4.1
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
