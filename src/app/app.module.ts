import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders} from './app.routing';
import { LocationStrategy,HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { HomeComponent } from './home/home.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';
import { SalidaComponent } from './salida/salida.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialbarComponent,
    SliderbarComponent,
    MenubarComponent,
    ThumbnailComponent,
    FooterComponent,
    CustomerComponent,
    AboutComponent,
    InstitucionalComponent,
    HomeComponent,
    FinanciacionComponent,
    SalidaComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders,{provide: LocationStrategy, useClass: HashLocationStrategy},],
  bootstrap: [AppComponent]
})
export class AppModule { }
