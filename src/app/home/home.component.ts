import { ElementRef,Component, OnInit, Inject,HostListener } from '@angular/core';
import { MenubarComponent} from '../menubar/menubar.component';
import { SliderbarComponent} from '../sliderbar/sliderbar.component';
import { ThumbnailComponent} from '../thumbnail/thumbnail.component';
import {CustomerComponent} from '../customer/customer.component';
import { AboutComponent} from '../about/about.component';
import { FooterComponent} from '../footer/footer.component';
import { HomeService} from './home.service';
import { DOCUMENT } from '@angular/platform-browser';


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
  public ref:string;
  public localRef:string;
  public referenciaAnterior:string='';
  constructor(private homeService: HomeService,@Inject(DOCUMENT) private document: any) {
     let loc = this.document.location.href;
     this.ref = loc.substring(loc.lastIndexOf('#')+1);
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

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(event.toElement.href != undefined){
      let referencia:string = event.toElement.href;
      if(referencia.includes('home')){
        this.localRef = referencia.substring(referencia.lastIndexOf('#')+1);
        if(this.localRef != this.referenciaAnterior){
          console.log('enlace distinto');
        this.referenciaAnterior = this.localRef;
        this.scrolltoSection(this.localRef);
        }else{
          console.log('enlace igual');
        }
      } 
    }
    
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
        this.scrolltoSection(this.ref);
    }
  }

  scrolltoSection(referencia){
    let selectedDiv = document.getElementById(referencia);
    console.log('seleccionado',selectedDiv);
    if(selectedDiv != null){
      let coordSelectedDiv = selectedDiv.getBoundingClientRect();
      
      window.scrollTo(coordSelectedDiv.left,coordSelectedDiv.top);
    }else{
      window.scrollTo(0,0);
    }
  }

}
