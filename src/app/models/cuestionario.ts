import { Deserializer } from "v8";
import { Pregunta } from "./pregunta";

export class Cuestionario{
    id?:number;
    nombre: string;
    description:string;
    fechaCreacion?:Date;
    listPreguntas: Pregunta[];

    constructor(nombre:string, description:string, fechaCreacion:Date, listPreguntas: Pregunta[]) {
        this.nombre=nombre;
        this.description=description;
        this.fechaCreacion=fechaCreacion;
        this.listPreguntas=listPreguntas;
    }
}