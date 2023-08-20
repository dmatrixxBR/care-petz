import { Servico } from './servico';
import { Cliente } from './cliente';
import { v4 as uuid } from 'uuid';

export class Agenda {

    public codigoAgenda:string = uuid();
    public dataAgenda : string = new Date().toISOString().substring(0, 10);;
    public horaAgenda : string = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    public clienteAgenda! : Cliente;
    public servicoAgenda!: Servico;
    public valorServico!: number;

constructor(){}

}
