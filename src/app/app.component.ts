import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { debounce } from 'src/debounce';

import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ativo = false;
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  total!: Observable<number>;
  versao = '1.0.8-rc';

  constructor(
    private updates: SwUpdate,
    private carrinho: CarrinhoService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.updates.available.subscribe(() => {
      window.location.reload();
    });
    if (this.updates.isEnabled) {
      await this.updates.checkForUpdate();
    }
    this.total = this.carrinho.total();
  }

  public toogle(): void {
    debounce(() => {
      this.ativo = !this.ativo;
    });
  }
}
