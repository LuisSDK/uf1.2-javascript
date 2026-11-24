// ==========================================================================
// Aula 1 - Introdução ao JavaScript: Variáveis e Tipos de Dados
// A encomenda no Café Morabeza
// ==========================================================================

// --------------------------------------------------------------------------
// 1. A primeira mensagem
// --------------------------------------------------------------------------

console.log("Olá, mundo! O JavaScript está a funcionar.");

// --------------------------------------------------------------------------
// 2. Variáveis: const (não muda) e let (pode mudar)
// --------------------------------------------------------------------------

const nomeCafe = "Café Morabeza";

let cliente = "ana";

console.log(cliente);

cliente = "Rui"; // o valor mudou: por isso usámos let
console.log(cliente);

// --------------------------------------------------------------------------
// 3. Tipos de dados primitivos
// --------------------------------------------------------------------------

const precoCafe = 80; // number: preço de um café, em escudos
let quantidade = 2; // number
const paraLevar = false; // boolean
let mesa; // undefined: ainda não tem valor
const observacoes = null; // null: vazio de propósito
console.log(typeof nomeCafe); // "string"
console.log(typeof precoCafe); // "number"
console.log(typeof paraLevar); // "boolean"
console.log(typeof mesa); // "undefined"
console.log(observacoes); // null
console.log(cliente + " pediu " + quantidade + " cafés no " + nomeCafe + ".");
console.log(`${cliente} pediu ${quantidade} cafés no ${nomeCafe}.`);

// --------------------------------------------------------------------------
// 4. A encomenda
// --------------------------------------------------------------------------

let total = precoCafe * quantidade;

console.log(`${cliente} pediu ${quantidade} cafés no ${nomeCafe}.`);
console.log(`Total a pagar: ${total} escudos.`);
console.log(`Para levar: ${paraLevar}`);

mesa = 4;
console.log(`Mesa: ${mesa}`);

// --------------------------------------------------------------------------
// 5. Mudar a quantidade
// --------------------------------------------------------------------------

quantidade = 3;
console.log(`Total antes de recalcular: ${total} escudos.`); // ainda 160
total = precoCafe * quantidade;
console.log(`Total recalculado: ${total} escudos.`); // agora 240

// --------------------------------------------------------------------------
// 6. Conversões: a armadilha do +
// --------------------------------------------------------------------------

const quantidadeTexto = "3"; // string, porque está entre aspas
console.log(precoCafe + quantidadeTexto); // "803": juntou os textos
console.log(precoCafe * Number(quantidadeTexto)); // 240: converteu primeiro
console.log(Number("abc")); // NaN: não é um número

// --------------------------------------------------------------------------
// 7. Perguntar ao cliente
// --------------------------------------------------------------------------

//const resposta = prompt("Quantos cafés quer?");
const cafesPedidos = Number(resposta);
console.log(typeof resposta); // "string"
const custo = precoCafe * cafesPedidos;
console.log(`${cafesPedidos} cafés custam ${custo} escudos.`);
