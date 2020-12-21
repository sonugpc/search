import { ReadMoreComponent } from './readmore/readmore.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';
import { JSONTableModule } from 'angular-json-table';
import { IonicModule } from '@ionic/angular';
import { UiSwitchModule } from 'ngx-ui-switch';
import { HighlightPipe } from './pipes/highlight.pipe';
import player from 'lottie-web';

import { LottieModule } from 'ngx-lottie';
export function playerFactory() {

  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ViewPageComponent,
   
    HeaderComponent,
    ReadMoreComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule, FormsModule,LottieModule.forRoot({ player: playerFactory,useCache:true }),
    ReactiveFormsModule, UiSwitchModule.forRoot({
      size: 'small',
    }),
    JSONTableModule ,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    NgbModule,HttpClientModule, IonicModule.forRoot({})
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
