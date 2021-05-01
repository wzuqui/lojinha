import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full',
  },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [ProdutosComponent, CarrinhoComponent],
})
export class AppRoutingModule {}
