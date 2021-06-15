import { EditarTarefasComponent } from './editar/editar-tarefas.component';
import { Routes } from '@angular/router';

import { CadastraComponent } from './cadastra';
import { ListaTarefasComponent } from './lista';

export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
	{ 
		path: 'tarefas/listar', 
		component: ListaTarefasComponent 
	}, 
	{ 
		path: 'tarefas/cadastrar', 
		component: CadastraComponent 
	},
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefasComponent 
	}
];
