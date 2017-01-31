import { Component, OnInit } from '@angular/core';
import { ItemSliderBar } from './sliderbar.item.model';
import { SliderbarService} from './sliderbar.service';
@Component({
  selector: 'sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css'],
  providers: [SliderbarService]
})
export class SliderbarComponent implements OnInit {
  public sliders: ItemSliderBar[] = [];

  constructor(private sliderServices: SliderbarService) {
    
  }

  ngOnInit() {
    this.loadSliders();
  }

  loadSliders(){
    this.sliderServices.getSliderbar().subscribe(
      resp => this.sliders = resp,
      error => console.log(error)
    );
  }

}
