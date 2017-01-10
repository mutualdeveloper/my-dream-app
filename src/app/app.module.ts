import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { HistoryComponent } from './history/history.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { HomeComponent } from './home/home.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialbarComponent,
    SliderbarComponent,
    MenubarComponent,
    ThumbnailComponent,
    HistoryComponent,
    FooterComponent,
    CustomerComponent,
    AboutComponent,
    InstitucionalComponent,
    HomeComponent,
    FinanciacionComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
