import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
// import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const produtosRoutes: Routes = [
  { path: 'produtos',  component: ProdutoListaComponent },
  // { path: 'produto/:id', component: ProdutoDetalheComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(produtosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProdutosRoutingModule { }
