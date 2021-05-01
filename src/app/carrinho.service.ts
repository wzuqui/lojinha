import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Historico } from './historico';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  public carrinho!: Record<string, Produto>;
  public carrinhoSave!: (value: Record<number, Produto>) => void;
  public historicos!: Historico[];
  public historicosSave!: (value: Historico[]) => void;
  private _total = new BehaviorSubject<number>(0);

  constructor() {
    this._cargao();
  }

  public adicionar(produto: Produto): void {
    let item = this.carrinho[produto.id];

    if (!item) {
      item = this.carrinho[produto.id] = JSON.parse(JSON.stringify(produto));
      item.quantidade = 1;
    } else {
      item.quantidade++;
    }

    this._salvarCarrinho();
  }

  public finalizar(): void {
    this.historicos.push(
      JSON.parse(
        JSON.stringify({
          data: new Date(),
          itens: Object.values(this.carrinho),
        })
      )
    );
    this.historicosSave(this.historicos);

    this.carrinho = {};
    this._salvarCarrinho();
  }

  public remover(produto: Produto): void {
    delete this.carrinho[produto.id];
    this._salvarCarrinho();
  }

  public total(): Observable<number> {
    return this._total.asObservable();
  }

  private _atualizarTotal(): void {
    this._total.next(
      Object.values(this.carrinho)
        .map((p) => p.quantidade)
        .reduce((acc, curr) => acc + curr, 0)
    );
  }

  private _cargao(): void {
    const [carrinho, carrinhoSave] =
      localStorage<Record<number, Produto>>('carrinho') ?? {};
    this.carrinho = carrinho ?? {};
    this.carrinhoSave = carrinhoSave;
    this._atualizarTotal();


    const [historico, historicoSave] = localStorage<Historico[]>('historico');
    this.historicos = historico ?? [];
    this.historicosSave = historicoSave;
  }

  private _salvarCarrinho(): void {
    this.carrinhoSave(this.carrinho);
    this._atualizarTotal();
  }
}

function localStorage<T>(key: string): [T | undefined, (value: T) => void] {
  const item = window.localStorage.getItem(key);
  const save = (value: T) =>
    window.localStorage.setItem(key, JSON.stringify(value));
  if (!!item) {
    try {
      return [JSON.parse(item), save];
    } catch {
      // ignored;
    }
  }
  return [undefined, save];
}
