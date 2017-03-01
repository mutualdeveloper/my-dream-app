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
  public status:boolean;
  constructor(private sliderServices: SliderbarService) {
    this.status = false;
  }

  ngOnInit() {
    this.loadSliders();
  }

  loadSliders(){
    this.sliderServices.getSliderbar().subscribe(
      resp => {this.sliders = resp;this.status=true},
      error => console.log(error)
    );
  }

}
