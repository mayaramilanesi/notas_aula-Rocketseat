# Header Menu Navigation

Crie o <header> de um site que contenha uma logo e um menu.
Um elemento deverá ficar ao lado do outro.
A logo que ficará na extrema esquerda e o menu ficará na extrema direita.
Os itens do menu ficarão um ao lado do outro, com um espaço de .8rem entre eles.
O último elemento do menu será um botão de contato e você poderá utilizar o seletor: last-child para estilizar.






```HTML
<header>
  <nav>
    <a href="#">LOGO</a>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Testimonials</li>
      <li>Contact</li>
    </ul>
  </nav>
</header>
```







```CSS
* {
  margin: 0
}

header {
  padding: 4rem;
  background: lightgray;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center
}

ul {
  display: flex;
  list-style: none;
  gap: 4rem;
  align-items: center;
}

ul li:last-child {
  background: black;
  color: white;
  padding: .8rem;
}
```