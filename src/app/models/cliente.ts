import { v4 as uuid } from 'uuid';

export class Cliente {
    public id! :number;
    public codigoCliente: string = uuid();
    public nomeCliente! : string;
    public celularCliente! : string;
    public emailCliente!:string;

constructor(){}

}


