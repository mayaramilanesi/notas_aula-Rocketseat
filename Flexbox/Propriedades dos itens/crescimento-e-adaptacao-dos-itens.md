# flex-grow (item crescendo)

- O crescimento do item dentro do container em relação aos espaços vazios.

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
}

.box div {
  border: 1px solid;
}

.box div:nth-child(2),
.box div:nth-child(3) {
  flex-grow: 1;
}

.box div:nth-child(1) {
  flex-grow: 2;
}
```