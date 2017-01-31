import { Component, OnInit } from '@angular/core';
import { ItemThumbnail } from './thumbnail.item.model';
import { ThumbnailService } from './thumbnail.service';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css'],
  providers: [ThumbnailService]
})
export class ThumbnailComponent implements OnInit {
  //Colección de servicios
  public thumbnails: ItemThumbnail[] = [];  
  //Colecion de imagenes
  public cruceros: string[] = [];
  //Titulo del módulo
  public titulo:string = "Servicios";
  
  constructor(private thumbnailService: ThumbnailService) {}

  ngOnInit() {
    this.loadThumbnails();
    this.loadCruceros();
  }

  loadCruceros(){
    this.cruceros = this.thumbnailService.getLogosCruceros();
  }

  loadThumbnails(){
    this.thumbnailService.getThumbnails().subscribe(
      resp => this.thumbnails = resp,
      error => console.log(error)
    );
  }

}
