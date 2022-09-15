# Direção dos itens

- Flex é uma dimensão SOMENTE (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)

ROW: LINHA

EIXO PADRÃO - ROW (LINHA)

ROW-REVERSE COLOCA OS ELEMENTOS DE TRAZ PARA FRENTE, DO FINAL PARA O COMEÇO

```HTML
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

```CSS
.container {
  display: flex;
  flex-direction: column-reverse;
  height: 80vh;
}
```
