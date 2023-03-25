export class Asistencia{
    id_asistencia?: any; 
    f_inasistencia?: string;
    observacion?: string; 
    id_curso: number; 
    id_usuario: number;
    c_inasistencia?: number;  

    constructor(id_curso: number, id_usuario: number) {
        this.id_curso = id_curso, 
        this.id_usuario = id_usuario
    }
}