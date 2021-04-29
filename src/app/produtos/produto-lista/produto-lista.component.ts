import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {
  public produtos!: Observable<Produto[]>;

  constructor(
    private service: ProdutoService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.produtos = this.service.getProdutos();
  }
}
