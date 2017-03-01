import { Component, OnInit } from '@angular/core';
import { MenubarComponent} from '../menubar/menubar.component';
import { SliderbarComponent} from '../sliderbar/sliderbar.component';
import { ThumbnailComponent} from '../thumbnail/thumbnail.component';
import {CustomerComponent} from '../customer/customer.component';
import { AboutComponent} from '../about/about.component';
import { FooterComponent} from '../footer/footer.component';
import { HomeService} from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})

export class HomeComponent implements  OnInit {
  public mantenimiento:string;
  constructor(private homeService: HomeService) {
     this.checkModoMantenimiento();
   }

  checkModoMantenimiento(){
    this.homeService.getModoMantenimiento().subscribe(
      resp => this.mantenimiento = resp.mantenimiento,
      error => console.log(error)
    );
  }

  ngOnInit() {
    
  }

}
