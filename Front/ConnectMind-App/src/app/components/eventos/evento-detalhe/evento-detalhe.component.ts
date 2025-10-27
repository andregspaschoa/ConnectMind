import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {
  
  get f(): any {
    return this.form.controls;
  }

  get bsConfig(): any {
    return {
              isAnimated: true, 
              dateInputFormat: 'DD/MM/YYYY hh:mm a',
              containerClass: 'theme-default', 
              showWeekNumbers: false,              
              adaptivePosition: true 
            };
  };

  evento = {} as Evento;

  estadoSalvar: 'post' | 'put' = 'post';
    // PUT (atualização): Quando há um id na rota, o código define estadoSalvar como 'put'.
    // POST (criação): Quando não há um id na rota, estadoSalvar permanece como 'post'.
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private localeService: BsLocaleService,
    private router: ActivatedRoute,
    private eventoService: EventoService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService 
    ) {
      this.localeService.use('pt-br');
  }

  public carregarEvento(): void {
    const eventoIdParam = this.router.snapshot.paramMap.get('id');
    if (eventoIdParam !== null) {
      this.spinner.show();
      this.estadoSalvar = 'put';
      this.eventoService.getEventoById(+eventoIdParam)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe({
          next: (evento: Evento) => {
            this.evento = {...evento};
            this.form.patchValue(this.evento);
          },
          error: (error: any) => {
            this.toastr.error('Erro ao carregar evento.', 'Erro!');
            console.error(error);
          }
        });
    }
  }

  ngOnInit(): void {
    this.carregarEvento();
    this.validation();
  }

  private validation(): void {
    this.form = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      dataEvento: ['', [Validators.required]],
      qtdPessoas: ['', [Validators.required, Validators.min(1), Validators.max(120000)]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      imageURL: ['', Validators.required],
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched };
  }

  public salvarAlteracao(): void {
    this.spinner.show();
    if (this.form.valid) {

      this.evento =  (this.estadoSalvar === 'post') 
        ? {...this.form.value} 
        : {id: this.evento.id, ...this.form.value};
        
        // Corrigir o problema de fuso horário
        const data = new Date(this.form.value.dataEvento);
        const dataCorrigida = new Date(data.getTime() - (data.getTimezoneOffset() * 60000));
        const dataFormatada = dataCorrigida.toISOString().slice(0, 19);
        this.evento.dataEvento = dataFormatada as any;

        this.eventoService[this.estadoSalvar](this.evento)
          .pipe(finalize(() => this.spinner.hide()))
          .subscribe({
            next: () => this.toastr.success('Evento atualizado com sucesso!', 'Sucesso!'),
            error: (error: any) => {
              console.error(error);
              this.toastr.error('Erro ao atualizar evento.', 'Erro!');
            }
          });
    }
  }  

}
