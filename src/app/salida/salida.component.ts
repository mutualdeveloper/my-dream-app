import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { ItemSalida} from './salida.item.model';
import { MenubarComponent} from '../menubar/menubar.component';
import { SalidaService } from './salida.service';


@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
  providers: [SalidaService]
})
export class SalidaComponent implements OnInit {
  public id:any;
  public item: ItemSalida;
  public images: Array<string> = [];
  public it:any;
  constructor(private route: ActivatedRoute,
  private router: Router, private salidaService: SalidaService) {
      let doc = document.getElementById('html');
      doc.className = '';
      let bo = document.getElementById('body');
      bo.className = '';
      let preprepre = document.getElementById('preprepre');
      preprepre.className = 'hide';
      this.route.params.subscribe(params => {
      this.id = +params['id'];
      });
      this.getPost();
      this.images.push('http://www.viajayliga.com/wp-content/uploads/2015/03/punta-cana-entertainment.jpg');
      this.images.push('http://zorrodelahorro.com.mx/wp-content/uploads/2016/07/punta-cana-delfin.jpg');
      this.images.push('http://167exq3fv17047q8wx12v2wm.wpengine.netdna-cdn.com/wp-content/uploads/2013/07/Cap-Cana-Adventure-Buggies-CD-9.jpg');
      this.item = new ItemSalida(this.id,'Punta Cana','desde el 01/02/2017 al 05/02/2017','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', this.images,44200);
   }

  ngOnInit() {
    
  }

  getPost(){
    this.salidaService.getPost(this.id).subscribe(
    resp => this.it = resp,
      error => console.log(error)
    );
  }

}
