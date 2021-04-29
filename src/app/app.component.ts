import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ativo = false;

  public toogle(): void {
    this.ativo = !this.ativo;
  }
}
