import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listaTransferencia: any[];
private url: string= 'http://localhost:3000/transferencias';
constructor( private httpClient:HttpClient) {
  this.listaTransferencia = [];
}

get transferencias(){
  return this.listaTransferencia;
  }

  adicionar(transferencia:any){
    this.hidratar(transferencia);

  this.listaTransferencia.push(transferencia) ;
  }

  todos(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  private hidratar(transferencia:any){
    transferencia.data = new Date();
  }

}


