import { Servico } from './servico';
import { Cliente } from './cliente';
import { v4 as uuid } from 'uuid';

export class Agenda {

    public codigoAgenda:string = uuid();
    public dataAgenda! : string;
    public horaAgenda! : string;
    public clienteAgenda! : Cliente;
    public servicoAgenda!: Servico;
    public valorServico!: number;

constructor(){}


}
