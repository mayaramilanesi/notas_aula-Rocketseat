## 9 fotos em 3 colunas

Crie uma galeria de fotos onde teremos 3 colunas e 9 fotos.
Deixe um espaço de .8rem entre os elementos da galeria






```HTML
<div class="gallery">
  <img src="https://source.unsplash.com/random?id=123" alt="">
  <img src="https://source.unsplash.com/random?id=161" alt="">
  <img src="https://source.unsplash.com/random?id=136" alt="">
  <img src="https://source.unsplash.com/random?id=739" alt="">
  <img src="https://source.unsplash.com/random?id=185" alt="">
  <img src="https://source.unsplash.com/random?id=276" alt="">
  <img src="https://source.unsplash.com/random?id=597" alt="">
  <img src="https://source.unsplash.com/random?id=235" alt="">
  <img src="https://source.unsplash.com/random?id=451" alt="">
</div>
```






```CSS
img {
  width: 30%;
  height: auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: center;
}
```