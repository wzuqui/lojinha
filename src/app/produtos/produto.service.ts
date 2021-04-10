import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    return of(PRODUTOS);
  }

  public getProduto(id: number | string): Observable<Produto | undefined> {
    return this.getProdutos().pipe(
      map((produtos: Produto[]) => produtos.find(produto => produto.id === +id))
    );
  }
}
