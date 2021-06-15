import { AppRoutingModule } from './app-routing-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TarefasModule } from './tarefas';
import { TarefaService } from './tarefas/shared';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TarefasModule,
    AppRoutingModule//é preciso ter importado o appRouting Module para as rotas funcionarem
  ],
  providers: [TarefaService], //Todo serviço é importado no providers.
  bootstrap: [AppComponent]
})
export class AppModule { }
