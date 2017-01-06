import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public titulo: string;
  public descripcion: string;
  constructor() {
    this.titulo = "TITULO";
    this.descripcion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur rem vitae sapiente quasi quibusdam quisquam optio possimus eos, alias minus quae hic, illo quo vel maxime nam corporis voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil pariatur rem vitae sapiente quasi quibusdam quisquam optio possimus eos, alias minus quae hic, illo quo vel maxime nam corporis voluptates.";

  }

  ngOnInit() {
  }

}
