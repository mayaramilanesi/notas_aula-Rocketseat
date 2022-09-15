# align-items

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch (ESTICADOS NO EIXO CRUZADO)
- flex-start (DEIXA OS ELEMENTOS NO INÍCIO DO EIXO CRUZADO)
- flex-end (DEIXA OS ELEMENTOS NO FIM DO EIXO CRUZADO)
- center (CENTRALIZA OS ELEMENTOS NO EIXO CRUZADO)


STRETCH (ESTICAR)


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
  height: 150px;
  align-items: center
}

.box div {
  border: 1px solid;
}
```
