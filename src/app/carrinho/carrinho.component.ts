import { Component, OnInit } from '@angular/core';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'src/debounce';

import { CarrinhoService } from '../carrinho.service';

import { Historico } from '../historico';
import { Produto } from '../produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  public faPaperPlane = faPaperPlane;
  public faTimes = faTimes;
  public historicos!: Historico[];
  public produtos!: Record<string, Produto>;
  public get itens(): Produto[] {
    return Object.values(this.produtos);
  }

  constructor(private service: CarrinhoService) {}

  public enviar(evento: Event, itens: Produto[], data?: Date): void {
    evento.preventDefault();

    let texto = '';

    if (typeof data === 'string') {
      data = new Date(data);
    }
    if (data) {
      texto += `${data.toLocaleDateString()} ${data.toLocaleTimeString()}\r\n`;
    }

    texto += itens
      .map((item) => `${item.quantidade} X ${item.nome}`)
      .join(`\r\n`);

    window.open(
      'https://api.whatsapp.com/send?phone=&text=' + encodeURIComponent(texto),
      '_blank'
    );
  }

  public finalizar(): void {
    this.service.finalizar();
    this.produtos = this.service.carrinho;
  }

  public remover(evento: Event, item: Produto): void {
    evento.preventDefault();
    debounce(() => {
      this.service.remover(item);
    });
  }

  public async ngOnInit(): Promise<void> {
    this.produtos = this.service.carrinho;
    this.historicos = this.service.historicos;
  }
}
