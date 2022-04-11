import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent implements OnInit {

  @Input('obj')
  funcionario: Funcionario = {id: 1, nome: 'João'};

  constructor() { }

  ngOnInit(): void {
  }

}
