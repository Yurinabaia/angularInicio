import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

export const routes: Routes = 
[

];//Importação das nossas rotas no angular

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}//Exportação da classe rota.