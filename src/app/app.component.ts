import { Component } from '@angular/core';
import { Funcionario } from './funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios: Funcionario[] = [];

  aoAdicionar(funcionario: Funcionario){
    this.funcionarios.push(funcionario);
  }
}
