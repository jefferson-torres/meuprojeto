import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Jefferson Torres';
  idade = 10;

  getIdade(){
    return this.idade;
  }
}
