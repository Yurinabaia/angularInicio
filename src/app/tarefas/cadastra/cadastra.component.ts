import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {
  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm | undefined;
  tarefa?: any;

  constructor(
    private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa?.form.valid) {
  	  this.tarefaService.cadastraTarefas(this.tarefa || {});
  	  this.router.navigate(["/tarefas"]);
    }
  }
}
