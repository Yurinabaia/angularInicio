import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarTarefasComponent } from './editar';
import { CadastraComponent } from './cadastra/cadastra.component';
import { ListaTarefasComponent } from './lista';
@NgModule({
  declarations: [
    CadastraComponent,
    EditarTarefasComponent,
    ListaTarefasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,//É preciso ter o forms module para usar o [(NgModel)]="bla"
    RouterModule//é preico importa o RouterModule para funcionar as rotas.
  ]
})
export class TarefasModule { }
