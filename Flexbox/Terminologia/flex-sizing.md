# Terminologia


- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container

```HTML
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```CSS
.container {
  display: flex;
  border: 1px solid red;
  height: 200px;
}

.item {
  background-color: gray;
  border: 1px solid;
  flex: 1px
}
```