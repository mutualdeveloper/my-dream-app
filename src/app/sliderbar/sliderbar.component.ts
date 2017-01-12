import { Component, OnInit } from '@angular/core';
import { ItemSliderBar } from './sliderbar.item.model';

@Component({
  selector: 'sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit {
  public sliders: ItemSliderBar[] = [];
  public slide1: ItemSliderBar;
  public slide2: ItemSliderBar;
  public slide3: ItemSliderBar;
  public slide4: ItemSliderBar;

  constructor() {
    this.slide1 = new ItemSliderBar('http://www.accafrica.org/wp-content/uploads/2015/04/ACC_Elephants.jpg', 'Esto es un titulo', 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit', null, null);
    this.slide2 = new ItemSliderBar('http://kasperglobal.com/site/images/int-packages/nepa/nepal-main-n.jpg', 'titulo2', 'desc2', 'Ver mas', 'http://www.google.com.ar');
    this.slide3 = new ItemSliderBar('http://panoramasafaricamp.com/wp-content/uploads/2015/04/africa_animals_2.jpg', 'titulo3', 'desc3', null, null);
    this.slide4 = new ItemSliderBar('http://www.appartgastauer.com/wp-content/uploads/gastauer_omgeving_slider_01.jpg', 'titulo3', 'desc3', null, null);
    this.sliders.push(this.slide1);
    this.sliders.push(this.slide2);
    this.sliders.push(this.slide3);
    this.sliders.push(this.slide4);
  }

  ngOnInit() {
  }

}
