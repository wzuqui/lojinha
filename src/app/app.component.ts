import { Component } from '@angular/core';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'src/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ativo = false;
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  versao = '1.0.0-rc';

  public toogle(): void {
    debounce(() => {
      this.ativo = !this.ativo;
    });
  }
}

