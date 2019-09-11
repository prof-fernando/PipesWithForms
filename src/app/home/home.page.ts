import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  preco = 0;
  formHome: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formHome = fb.group({
      nome: [['professor'], [Validators.required, Validators.minLength(3)]],
      valor: [[], [Validators.required]]
    });
  }
  public testar(): void {
    console.log(this.formHome.value);
    console.log('esp', this.formHome.value.nome);
  }
  get valor(): AbstractControl {
    return this.formHome.get('valor');
  }
}
