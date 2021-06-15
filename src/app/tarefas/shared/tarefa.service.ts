import { Tarefa } from './tarefa.model';
import { TarefasModule } from './../tarefas.module';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  listaTarefas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];//convertendo Objeto tarefas para json
  }

  cadastraTarefas(tarefa: Tarefa): void 
  {
    const tarefas = this.listaTarefas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    console.log(tarefa.id);
    localStorage['tarefas'] = JSON.stringify(tarefas);//Convertendo jso para string
  } 

  buscarPeloId(id: number): Tarefa 
  {
    const tarefas: Tarefa[] =  this.listaTarefas();
    return tarefas.find(tarefa => tarefa.id === id) || {};//Erro de undefined type usar essa expressão || {}
  }
  atualiazarTarega(tarefa:Tarefa): void
  {
    const tarefas: Tarefa[] =  this.listaTarefas();
    tarefas.forEach((obj, index, objs)=> 
    {
      if(tarefa.id === obj.id) 
      {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  removerTarefa(id: number): void 
  {
    let tarefas: Tarefa[] =  this.listaTarefas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id) || {};
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  alterarStatus(id:number): void 
  {
    const tarefas: Tarefa[] =  this.listaTarefas();
    tarefas.forEach((obj, index, objs) => 
    {
      if(id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
