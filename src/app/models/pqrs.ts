export class pqrs {
    id_pqrs?: number;
    id_usuario: number;
    text_pqrs: string; 
    tipo_pqrs: string; 

    constructor(id_usuario:number, text_pqrs: string, tipo_pqrs: string) {
        this.id_usuario =  id_usuario, 
        this.text_pqrs = text_pqrs,
        this.tipo_pqrs = tipo_pqrs
    }
}