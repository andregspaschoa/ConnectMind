import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  exibirImagem: boolean = false;
  private _filterList: string = '';

  public get filterList() {
    return this._filterList
  }

  public set filterList(value) {
    this._filterList = value
    this.eventosFiltrados = this.filterList ? this.filterEventos(this.filterList) : this.eventos;
  }

  filterEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema: string; local: string; dataEvento: string; }) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  showOrHideImg() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {

    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error),
    );
  }
}
