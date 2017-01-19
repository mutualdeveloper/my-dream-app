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
    this.slide1 = new ItemSliderBar('http://mutualjerarquico.ddns.net/res/img/turismo/slider/1.png', 'Bienvenido! Turismo Mutual de Petroleros Jerárquicos', null , null, null);
    this.slide2 = new ItemSliderBar('http://mutualjerarquico.ddns.net/res/img/turismo/slider/2.jpg', 'Punta Cana', null, 'Ver mas', '/salida/1');
    this.slide3 = new ItemSliderBar('http://mutualjerarquico.ddns.net/res/img/turismo/slider/3.jpg', 'Salta', null, 'Ver mas', null);
    this.slide4 = new ItemSliderBar('http://mutualjerarquico.ddns.net/res/img/turismo/slider/4.jpg', 'Cruceros', null, 'Ver mas', null);
    this.sliders.push(this.slide1);
    this.sliders.push(this.slide2);
    this.sliders.push(this.slide3);
    this.sliders.push(this.slide4);
  }

  ngOnInit() {
  }

}
