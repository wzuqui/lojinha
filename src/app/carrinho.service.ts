import { Injectable } from '@angular/core';
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

    this.carrinhoSave(this.carrinho);
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
    this.carrinhoSave(this.carrinho);
  }

  public remover(produto: Produto): void {
    delete this.carrinho[produto.id];
    this.carrinhoSave(this.carrinho);
  }

  private _cargao(): void {
    const [carrinho, carrinhoSave] =
      localStorage<Record<number, Produto>>('carrinho') ?? {};
    this.carrinho = carrinho ?? {};
    this.carrinhoSave = carrinhoSave;

    const [historico, historicoSave] = localStorage<Historico[]>('historico');
    this.historicos = historico ?? [];
    this.historicosSave = historicoSave;
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
