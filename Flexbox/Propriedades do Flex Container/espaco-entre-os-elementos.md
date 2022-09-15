# gap

- Espaços SOMENTE entre os elementos

## valores

Unidades de medidas
ficas: px, pt
flexíveis: %, em, rem


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
  gap: 5%
}

.box div {
  border: 1px solid;
}
```