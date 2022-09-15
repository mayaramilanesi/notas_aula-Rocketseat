# Flex-flow

- shorthand (MANEIRA CURTA DE ESCREVER MAIS DE UMA PROPRIEDADE)
- flex-direction || flex-wrap


```HTML
<div class="box">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

``` CSS
.box {
  display: flex;
  border: 1px dashed red;
  flex-flow: wrap column;
}

.box div {
  border: 1px solid;
  width: 80px;
}
```
