import { Respuesta } from "./respuesta";


export class Pregunta{
    descripcion: string;
    listRespuesta : Respuesta[];
    hide?: boolean;

    constructor(description:string, listRespuesta: Respuesta[]) {
        this.descripcion=description;
        this.listRespuesta= listRespuesta;
        this.hide=true;
    }
}