import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  get f(): any {
    return this.form.controls;
  }
  
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      ultimoNome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), this.senhaForteValidator]],
      confirmarSenha: ['', [Validators.required]],
      termosUso: [false, [Validators.requiredTrue]]
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
