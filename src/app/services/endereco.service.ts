import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Endereco } from '../domain/endereco';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnderecoService {

  constructor(private http : HttpClient) { }

  getEndereco(cep : string) : Observable<Endereco>{
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json`);
  }

}
