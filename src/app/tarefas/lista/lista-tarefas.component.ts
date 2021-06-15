import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas?: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
  	this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
  	return this.tarefaService.listaTarefas();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.removerTarefa(tarefa.id || 0);
      this.tarefas = this.listarTodos();
    }
  }

  // alterarStatus(tarefa: Tarefa): void {
  //   if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
  //     this.tarefaService.alterarStatus(tarefa.id || 0);
  //     this.tarefas = this.listarTodos();
  //   }
  // }
}

