import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa?: NgForm;
  tarefa?: any;

  constructor(
    private tarefaService: TarefaService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
	this.tarefa = this.tarefaService.buscarPeloId(id);
  }

  atualizar(): void {
    if (this.formTarefa?.form.valid) {
	    this.tarefaService.atualiazarTarega(this.tarefa || {});
	    this.router.navigate(['/tarefas']);
    }
  }


}
