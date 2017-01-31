import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { ItemFooter} from './footer.item';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
  public itemsFooter: ItemFooter[] = [];
  public arrayTipoFooter: any;
  constructor(private footerService: FooterService) { 
    this.datosFooter();
    this.tiposFooter();
  }

  datosFooter(){
    this.footerService.getFooterData().subscribe(
      resp => {this.itemsFooter = resp;console.log(resp)},
      error => console.log(error)
    );
  }

  tiposFooter(){
    this.footerService.getFooterType().subscribe(
        resp => this.arrayTipoFooter = resp,
        error => console.log(error)
    );
  }


  ngOnInit() {
  }



}
