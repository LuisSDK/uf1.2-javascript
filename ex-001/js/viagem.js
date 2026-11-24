// ===============================================
// 1. dados de viagem
// ===============================================
const origem = "Praia (Santiago)";
const destino = "Sao Filipe (Fogo)";
let precoBilhete = 3500;   
let passageiros = 2;
let lugaresLivres = 120;


// ===============================================
// 2. tipos
// ===============================================
let temCamarote = false; // boolean
let numeroLugar; // undefined (declarado, ainda sem valor)
let observacoes = null; // null (sem valor, de propósito)


// ===============================================
// 3.  bilhete
// ===============================================
let total = precoBilhete * passageiros;
lugaresLivres = lugaresLivres - passageiros;
numeroLugar = 27; // passa a ser number

console.log(`Viagem: ${origem} -> ${destino}`);
console.log(`Passageiros: ${passageiros}`);
console.log(`Lugar: ${numeroLugar}`);
console.log(`Camarote: ${temCamarote}`);
console.log(`Total: ${total} escudos`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);


// ===============================================
// 4. mais um passageiro
// ===============================================
passageiros = passageiros + 1;
total = precoBilhete * passageiros; // recalcula o total
lugaresLivres = lugaresLivres - 1;

console.log(`Com ${passageiros} passageiros o total é ${total} escudos`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);