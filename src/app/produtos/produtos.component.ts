import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private carrinho: CarrinhoService
  ) {}

  public adicionar(produto: Produto): void {
    this.carrinho.adicionar(produto);
  }

  public async ngOnInit(): Promise<void> {
    this.produtos = this.service.produtos();
  }
}
