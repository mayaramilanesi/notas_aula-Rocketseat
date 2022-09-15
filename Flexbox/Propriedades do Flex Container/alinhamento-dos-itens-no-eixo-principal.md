# justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## Valores

- flex-start (DO INÍCIO PARA O FIM)
- flex-end (DO FIM PARA O COMEÇO)
- center (CENTRALIZA TODOS OS ELEMENTOS DO FLEX)
- space-between (ESPAÇOS IGUAIS ENTRE OS ELEMENTOS)
- space-around (ESPAÇOS IGUAIS AO REDOR DOS ELEMENTOS)
- space-evenly (ESPAÇOS IGUAIS DO INÍCIO AO FIM DOS ELEMENTOS)


```HTML
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

```CSS
.box {
  display: flex;
  border: 1px dashed red;
  justify-content: flex-start;
}

.box div {
  border: 1px solid;
}
```