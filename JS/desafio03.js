// Desafio 3
const numeroTabuada = parseInt(prompt("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 10; i++) {
  const resultado = numeroTabuada * i;
  console.log(`${numeroTabuada} x ${i} = ${resultado}`);
}
