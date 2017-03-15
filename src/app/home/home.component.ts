import { ElementRef,Component, OnInit, Inject,HostListener,AfterContentInit } from '@angular/core';
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
    if(localStorage.getItem('previousUrl') == 'home'){
      let loc = this.document.location.href;
      this.ref = loc.substring(loc.lastIndexOf('#')+1);
      this.cantComp = 0;
      this.finishload = false;
      this.checkModoMantenimiento();
    }else{
      localStorage.setItem('previousUrl','home');
      location.reload();
    }
     
   }

  checkModoMantenimiento(){
    this.homeService.getModoMantenimiento().subscribe(
      resp => {this.mantenimiento = resp.mantenimiento,this.ocultarAnimacion()},
      error => console.log(error)
    );
  }

  

  //Evento:desplazamiento interno
  @HostListener('document:click', ['$event'])
  clickout(event) {
    let data = event.toElement.src;
    if(event.toElement.href != undefined){
      let referencia:string = event.toElement.href;
      if(this.checkHomeRef(referencia)){       
        this.localRef = referencia.substring(referencia.lastIndexOf('#')+1);
        if(this.localRef != this.referenciaAnterior){
        this.referenciaAnterior = this.localRef;
        location.hash = '#' + this.localRef;
        }
      } 
    }else if(this.checkRef(data,'http://mutualdepetroleros.tur.ar/assets/imagenes/servicios/aereo.jpg')){
        location.hash = '#aereos';
    }else if(this.checkRef(data,'http://mutualdepetroleros.tur.ar/assets/imagenes/servicios/paquetes.jpg')){
        location.hash = '#paquetes';
    }
  }

  ocultarAnimacion(){
    if(this.mantenimiento == 'true'){
      localStorage.setItem('previousUrl','financiacion');
      window.scrollTo(0,0); 
      let doc = document.getElementById('html');
      doc.className = '';
      let bo = document.getElementById('body');
      bo.className = '';
      let preprepre = document.getElementById('preprepre');
      preprepre.className = 'hide';
    }
    
  }

  ngOnInit(){

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
        this.scrolltoSection();
    }
  }


 

  
  scrolltoSection(){
    let selectedDiv = document.getElementById(this.ref);
    if(selectedDiv != null){
      //let coordSelectedDiv = selectedDiv.getBoundingClientRect();
      //window.scrollTo(coordSelectedDiv.left,coordSelectedDiv.height);
      location.hash = '#' + this.ref;
    }
  }

  checkHomeRef(ref){
    return ref.includes('home');
  }

  checkRef(ref,substring){
    return  ref.includes(substring);
  }



}
