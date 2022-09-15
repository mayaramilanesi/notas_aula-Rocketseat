# flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container.

WRAP (ENROLAR)
OBS: ELE SÓ VAI CRIAR NOVAS LINHAS CASO NECESSÁRIO (DEPENDENDO DO TAMANHO DA VIEWPORT)

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
  flex-wrap: wrap;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;
}
```

