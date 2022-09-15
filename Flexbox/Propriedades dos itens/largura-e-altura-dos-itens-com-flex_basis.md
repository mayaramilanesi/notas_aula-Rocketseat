# flex-basis

POR PADRÃO É auto


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
  flex-basis: 25%;
}
```
