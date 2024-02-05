

```sh
algoritmo Tabuada
var
    numeroTabuada, i, resultado: inteiro

inicio
    escreva("Digite um número para ver sua tabuada: ")
    leia(numeroTabuada)

    para i de 1 ate 10 faca
        resultado <- numeroTabuada * i
        escreva(numeroTabuada, " x ", i, " = ", resultado)
    fimPara
fimAlgoritmo
```