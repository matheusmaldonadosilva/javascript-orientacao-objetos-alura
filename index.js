import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// const cliente1 = new Cliente(); /* criando um novo cliente */
// const cliente2 = new Cliente(); /* criando um objeto */
/*criando um objeto a partir do molde Cliente */

const cliente1 = new Cliente("Ricardo", 1112223309);

const cliente2 = new Cliente("Alice", 88822233309);

let numeroDeContas = 0;

console.log(cliente2.cpf);

// cliente2.nome = "Alice";
// cliente2.cpf = "88822233309";

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1); /*criando o objeto(instancia) conta corrente ricardo */
// ContaCorrenteRicardo.agencia = 1001;
// ContaCorrenteRicardo.Cliente = cliente1;
ContaCorrenteRicardo.depositar(500);

// console.log(ContaCorrenteRicardo.saldo);
// ContaCorrenteRicardo.saldo += 100; /*depositando o valor de 100 */

// ContaCorrenteRicardo.depositar(100);
// // ContaCorrenteRicardo.depositar(200);
// // ContaCorrenteRicardo.depositar(-1);
// // console.log(ContaCorrenteRicardo.saldo);
// // ContaCorrenteRicardo.sacar(50); /* nao deixa sacar a mais do valor */

// const valorSacado = ContaCorrenteRicardo.sacar(50);


const conta2 = new ContaCorrente(102, cliente2);
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88822233309;
// conta2.cliente = cliente1;
// conta2.agencia = 102;

let valor = 200;
ContaCorrenteRicardo.transferir(valor, conta2);
console.log(cliente2);
console.log(cliente1);

console.log(ContaCorrente.numeroDeContas);
