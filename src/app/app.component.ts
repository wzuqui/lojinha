import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'src/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ativo = false;
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  versao = '1.0.7-rc';

  constructor(private updates: SwUpdate) {}

  public async ngOnInit(): Promise<void> {
    this.updates.available.subscribe(() => {
      window.location.reload();
    });
    if (this.updates.isEnabled) {
      await this.updates.checkForUpdate();
    }
  }

  public toogle(): void {
    debounce(() => {
      this.ativo = !this.ativo;
    });
  }
}
