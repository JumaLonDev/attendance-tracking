export class Curso{
    id_curso?: any; 
    num_curso: any; 
    nom_curso: any; 
    jornada_curso: any;
    prof_curso?: any; 

    constructor(num_curso: string, nom_curso: string, jornada_curso:string){

        this.num_curso = num_curso; 
        this.nom_curso = nom_curso; 
        this.jornada_curso = jornada_curso; 
    }
}; 
