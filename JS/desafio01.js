// Desafio 1
let numero;

do {
  numero = parseInt(prompt("Digite um número (digite 10 para sair): "));
  console.log(`Você digitou: ${numero}`);
} while (numero !== 10);

console.log("Você digitou o número 10. Programa encerrado.");
