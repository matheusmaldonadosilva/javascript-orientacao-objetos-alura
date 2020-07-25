export class Cliente {
    nome;
    _cpf; /* propriedades */


    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

} /*criando um molde para cliente */
