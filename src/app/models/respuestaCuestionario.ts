import { RespuestaCuestionarioDetalle } from "./respuestaCuestionarioDetalle";

export class RespuestaCuestionario{
    cuestionarioId: number;
    nombreParticipante: string;
    fecha: Date;
    listRtaCuestionarioDetalle: RespuestaCuestionarioDetalle[];

}