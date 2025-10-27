import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  modalRef!: BsModalRef;
  public eventoId!: number;
  public eventoTema!: string;


  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public widthImg: number = 150;
  public marginImg: number = 2;
  public exibirImagem: boolean = false;
  private _filterList: string = '';
  public get filterList() {
    return this._filterList
  }

  public set filterList(value) {
    this._filterList = value
    this.eventosFiltrados = this.filterList ? this.filterEventos(this.filterList) : this.eventos;
  }

  public filterEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(
    private router: Router,
    private eventoService: EventoService, 
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit() {
    this.spinner.show();
    this.carregarEventos();
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public carregarEventos(): void {
    this.eventoService.getEventos()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (eventos: Evento[]) => {
          this.eventos = eventos;
          this.eventosFiltrados = this.eventos;
        },
        error: (error: any) => {
          this.toastr.error('Erro ao carregar os eventos', 'Erro!');
        }
      });
  }

  openModal(event:any , template: TemplateRef<any>, eventoId: number, eventoTema: string):void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.eventoTema = eventoTema;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
    this.spinner.show();
    
    this.eventoService.deleteEvento(this.eventoId)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (result: any) => {
          if(result.message === 'Deletado'){ // O mais correto seria utilizar response.status === 200
            this.toastr.success('Evento deletado com sucesso', 'Deletado!');
            this.carregarEventos();
          }
        },
        error: (error: any) => {
          this.toastr.error(`Erro ao deletar o evento ${this.eventoTema} de Código ${this.eventoId}`, 'Erro!');
          console.error(error);
        }
      });
  }

  decline(): void {
    this.modalRef.hide();
  }

  detalheEvento(id: number): void {
    this.router.navigate([`/eventos/detalhe/${id}`]);
  }

}
