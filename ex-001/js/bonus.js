// perguntar nome e ano de nascimento
const anoAtual = 2026;

const nome = prompt("Qual é o teu nome?");
const respostaAno = prompt("Em que ano nasceste?");

// tipos antes e depois do number(...)
console.log(`typeof da resposta do prompt: ${typeof respostaAno}`); // "string"

const anoNascimento = Number(respostaAno);
console.log(`typeof depois do Number(...): ${typeof anoNascimento}`); // "number"

// calcular e mostrar a idade
const idade = anoAtual - anoNascimento;

console.log(`Olá, ${nome}! Este ano fazes ${idade} anos.`);

/*
aparece: "olá, nome! este ano fazes nan anos."
porque o prompt devolve sempre string e o number("dois mil")
não consegue transformar palavras num número, por isso devolve nan
("not a number"). qualquer conta feita com nan dá nan, por isso
2026 - nan = nan. curiosidade: typeof nan continua a dar "number".
*/
