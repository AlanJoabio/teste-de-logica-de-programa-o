
```sh
algoritmo LeituraAteDez
var
    numero: inteiro

inicio
    numero <- 0

    enquanto numero <> 10 faca
        escreva("Digite um número (digite 10 para sair): ")
        leia(numero)
        escreva("Você digitou: ", numero)
    fimEnquanto

    escreva("Você digitou o número 10. Programa encerrado.")
fimAlgoritmo
```