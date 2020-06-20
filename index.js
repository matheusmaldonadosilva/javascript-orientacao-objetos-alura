class Cliente{
    nome;
    cpf;
 
}

class ContaCorrente {
    agencia;
    _saldo = 0; // # colocando em modo privado, já o _ nao deixa privado mais é um alerta para dizer que esse atributo é privado
    // https://github.com/tc39/proposal-class-fields#private-fields
    sacar(valor){

        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; // retornar valor, finaliza a seção
        }
    }

    depositar(valor) {
        if(valor < 0)
        {
            // console.log(this.#saldo);
            return; // caso o valor seja menor que 0 return nada
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.depositar(-100);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(ContaCorrenteRicardo);


// const cliente3Nome = "Alice";
// const cliente3CPF = 88822233309;
// const cliente3Agencia = 1001;
// const cliente3Saldo = 0;

// console.log(cliente1, cliente2);