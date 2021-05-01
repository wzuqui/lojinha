import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from './produtos';



@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor() { }

  produtos(): Produto[] {
    return PRODUTOS;
  }
}