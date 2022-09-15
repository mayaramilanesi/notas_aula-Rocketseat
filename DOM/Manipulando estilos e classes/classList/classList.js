//alterando estilos
//classList

const element = document.querySelector('body')

element.classList.add('active', 'green')

console.log(element.classList)

element.classList.remove('active')

// toggle pesquisa se a classe está no elemento, se tiver ela tira e se não tiver ele coloca
element.classList.toggle('active')