// ==========================================================================
// O Detetive de Erros: a Mercearia da Tia Lena
// Este ficheiro tem 6 erros. Corrijam um de cada vez e, ao lado de cada
// correção, escrevam um comentário com a mensagem que a Console mostrava.
// ==========================================================================

const nomeLoja = "Mercearia da Tia Lena";
let nomeProduto = "Arroz"; //Uncaught SyntaxError: Unexpected identifier 'produto'
let precoQuilo = 150;
let doisquilos = precoQuilo * 2; //Uncaught SyntaxError: Invalid or unexpected token

console.log(`${nomeLoja}: ${nomeProduto} a ${precoQuilo} escudos o quilo.`); //PrecoQuilo em vez de precoQuilo, pois o nome da variável é case sensitive.

let stock = 40; //const em vez de let, pois o stock vai mudar.
stock = stock - 5;
console.log(`Ficaram ${stock} sacos de arroz.`);

let quantidade = "3";
let total = precoQuilo + quantidade;
console.log(`3 quilos custam ${total} escudos.`);

let emPromocao = false; //"false" em vez de false, pois o valor é booleano e não string.
console.log(typeof emPromocao);