import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  
  public titulo: string = 'Perfil';
  
  get f(): any {
    return this.form.controls;
  }
  
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha')
    };

    this.form = this.fb.group({
      titulo: [''],
      primeiroNome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      ultimoNome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      funcao: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      senha: ['', [Validators.minLength(8), Validators.maxLength(20), this.senhaForteValidator]],
      confirmarSenha: ['']
    }, formOptions);
  }

  senhaForteValidator(control: any) {
    const senha = control.value;
    if (!senha) return null;
    
    const temMinuscula = /[a-z]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha);
    
    const senhaValida = temMinuscula && temMaiuscula && temNumero && temEspecial;
    
    if (!senhaValida) {
      return { senhaFraca: true };
    }
    
    return null;
  }

  public resetForm(): void {
    this.form.reset();
  }

}
