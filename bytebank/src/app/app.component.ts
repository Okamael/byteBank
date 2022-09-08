import { TransferenciaService } from './services/transferencia.service';
import { AnimateTimings } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service:TransferenciaService){

  }

  title = 'bytebank';
  transferir($event){
    this.service.adicionar($event);
  }
}
