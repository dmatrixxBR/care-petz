import { v4 as uuid } from 'uuid';
export class Servico {

    public id! : number;
    public codigoServico: string = uuid();
    public descricaoServico! : string;
    public valorServico!: number;  
        
    constructor(){}



}
