import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { TarefaRoutes } from './tarefas/tarefas-routing.module';

export const routes: Routes = 
[
    { 
		path: '', 
		redirectTo: '/tarefas/listar', 
		pathMatch: 'full' 
	},
	...TarefaRoutes
];//Importação das nossas rotas no angular

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}//Exportação da classe rota.