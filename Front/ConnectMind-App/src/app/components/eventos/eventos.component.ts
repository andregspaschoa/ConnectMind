import { Component, OnInit, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  
  public titulo: string = 'Eventos';
  public subtitulo: string = 'Lista de eventos';
  public iconClass: string = 'fas fa-calendar-alt';

  constructor() { }

  ngOnInit(): void {
    
  }

}
