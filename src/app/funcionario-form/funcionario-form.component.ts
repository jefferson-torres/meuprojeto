import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId = 0;
  nome = 'Jefferson Torres';
  adicionado: boolean = false;
  @Output()
  funcionarioAdicionado = new EventEmitter();
  

  adicionar() {
    this.adicionado = true;

    const funcionario: Funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
