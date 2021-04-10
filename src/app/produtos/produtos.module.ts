import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
// import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ],
  declarations: [
    ProdutoListaComponent,
    // ProdutoDetalheComponent
  ]
})
export class ProdutosModule {}

