import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefasModule } from './tarefas';
import { TarefaService } from './tarefas/shared';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [TarefaService], //Todo serviço é importado no providers.
  bootstrap: [AppComponent]
})
export class AppModule { }
