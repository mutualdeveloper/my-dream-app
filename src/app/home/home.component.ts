import { ElementRef,Component, OnInit } from '@angular/core';
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
  public cantComp: number;
  public finishload: boolean;
  constructor(private homeService: HomeService) {
     this.cantComp = 0;
     this.finishload = false;
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

  ngAfterViewChecked(){
    this.cantComp++;
    if(this.cantComp == 34){
        let doc = document.getElementById('html');
        doc.className = '';
        let bo = document.getElementById('body');
        bo.className = '';
        let preprepre = document.getElementById('preprepre');
        preprepre.className = 'hide';
        this.finishload = true;
        let contenido = document.getElementById('contenido');
        contenido.className = 'show';
    }
  }

}
