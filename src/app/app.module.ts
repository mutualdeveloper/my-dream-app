import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { HistoryComponent } from './history/history.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
