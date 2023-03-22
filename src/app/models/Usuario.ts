
export class Usuario{
    /**
     * Inicializar las variables
     */
    id_usuario?: any;
    nombre: string;
    apellido: string;
    correo: string;
    correo_respaldo: string;
    num_documento: string; 
    num_contrato: string; 
    num_contacto: string; 
    id_rol: string; 
    contrasena: string; 
    estado_usuario: string; 


    constructor(nombre: string, apellido: string, correo: string, correo_respaldo: string, num_documento: string, num_contrato:string, num_contacto: string, id_rol: string, contrasena: string, estado_usuario: string) {
        
        this.nombre =  nombre; 
        this.apellido = apellido; 
        this.correo = correo; 
        this.correo_respaldo = correo_respaldo; 
        this.num_documento = num_documento; 
        this.num_contrato = num_contrato; 
        this.num_contacto = num_contacto; 
        this.id_rol = id_rol; 
        this.contrasena = contrasena; 
        this.estado_usuario = estado_usuario;         
    }
};