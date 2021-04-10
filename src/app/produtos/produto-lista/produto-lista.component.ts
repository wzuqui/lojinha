import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {
  public produtos$!: Observable<Produto[]>;
  public selectedId!: number;

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.produtos$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          this.selectedId = + id;
          return this.service.getProdutos();
        }
        return [];
      })
    );
  }
}
