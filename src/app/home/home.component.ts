import { Component, OnInit } from '@angular/core';
import { MenubarComponent} from '../menubar/menubar.component';
import { SliderbarComponent} from '../sliderbar/sliderbar.component';
import { ThumbnailComponent} from '../thumbnail/thumbnail.component';
import {CustomerComponent} from '../customer/customer.component';
import { AboutComponent} from '../about/about.component';
import { FooterComponent} from '../footer/footer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
