# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML
* ID selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
* Class selector
    - Os elementos que contenham um atributo `class`.
    - Podemos ter uma ou mais classes.
* Attribute selector
    - um elemento que tenha um atributo específico.
* Pseudo-class selector
    - Elementos em um estado específico.


## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```CSS
h1, p, a {
    color: red;
}
```