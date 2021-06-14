export class Tarefa
{
    constructor(
        public id?: number,
        public nome?: string, 
        public concluido?: boolean//O ponto de interrogação é o Elvis, 
        //sendo que quando você instanciar a classe você pode ou não passar esse campo
    ) 
    {

    }
}