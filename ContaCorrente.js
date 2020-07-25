import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    saldo = 0;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
            
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this.saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    /*função de sacar dentro do metodo*/
    sacar(valor) {   /* toda regra de proteção evita falhas de saque */
        if (this.saldo >= valor) { /* para referenciar usamos o this no lugar da usuario */
            this.saldo -= valor; /* ContaCorrenteRicardo - valor */
            return valor;
        }   /* quero que o saldo dessa conta corrente(usuario) */
    }

    depositar(valor) { /* dentro de parenteses são informados os parametros, nesse caso (valor), porem pode ter mais que um parametro */
        if (valor <= 0) {
            return;
        }
        this.saldo += valor; /* saldo + valor */
    }

    transferir(valor, conta){
        conta.cidade ="São Paulo";
        const valorSacado = this.sacar(valor);

    }

}