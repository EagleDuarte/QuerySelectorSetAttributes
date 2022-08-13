/*1-Capture, armazene e manipule todos os elementos de classe "card". 
Modifique o estilo desses elementos para que fique semelhante a imagem de exemplo.*/

let card = document.querySelectorAll('.card');
card.forEach((elemento) => elemento.setAttribute('style', 'background-color:#e16e0e'));

/* 2- Capture, armazene e manipule todos os elementos de classe "titulo-card".
Modifique o estilo desses elementos para que fique semelhante a imagem de exemplo. */

 let tituloCard = document.querySelectorAll('.titulo-card');
tituloCard.forEach((elemento) => elemento.setAttribute('style', 'color:#2b385b; margin:30px 0'));

/*3. Modifique o texto dos títulos nos cards para "Meu card".*/

tituloCard.forEach((elemento) => (elemento.innerHTML = 'Meu Card'));

/* 4-Capture, armazene e manipule todos os elementos de classe "descricao-card". 
Modifique o estilo desses elementos para que fique semelhante a imagem de exemplo. */

let descricaoCard = document.querySelectorAll('.descricao-card');
descricaoCard.forEach((elemento) =>
  elemento.setAttribute('style', 'font-size: 14px; margin-bottom: 30px; color: white')
);

/*5-Modifique o texto de descrição do card para "Descrição modificada pelo JavaScript".*/

descricaoCard.forEach((elemento) => (elemento.innerHTML = 'Descrição modificada pelo JavaScript'));

/* 6 - Capture, armazene e manipule todos os elementos de classe "botao-apagar". 
Modifique o estilo desses elementos para que fique semelhante a imagem de exemplo.*/

let btnApagar = document.querySelectorAll('.botao-apagar');
btnApagar.forEach((elemento) =>
  elemento.setAttribute(
    'style',
    'padding: 10px; border-radius:10px; border: 1px solid red; background-color:red; color:white;cursor:pointer;'
  )
);

/* 7-Capture, armazene e manipule todos os elementos de classe "botao-editar". 
Modifique o estilo desses elementos para que fique semelhante a imagem de exemplo.*/

let btnEditar = document.querySelectorAll('.botao-editar');
btnEditar.forEach((elemento) =>
  elemento.setAttribute(
    'style',
    'padding: 10px; border-radius:10px; border: 1px solid green; background-color:green; color:white;cursor:pointer;'
  )
);

/*8-adicione o atributo 'onclick' nos elementos de classe 'botão-editar'. Ao clicar nesses elementos deve chamar a função 'editarCard()'. 
Essa função deve mostrar um alerta com a mensagem "Clicou em EDITAR!".*/

btnEditar.forEach((elemento) => elemento.setAttribute('onclick', 'editarCard()'));

/* 9 -adicione o atributo 'onclick' nos elementos de classe 'botão-apagar'. Ao clicar nesses elementos deve chamar a função 'apagarCard()'. 
Essa função deve perguntar ao usuario se ele tem certeza da exclusão do card. Se o usuário confirmar a exclusão deve mostrar um alerta com a mensagem "Confirmado!", se não deve mostrar a mensagem "Cancelou!".*/

btnApagar.forEach((elemento) => elemento.setAttribute('onclick', `apagarCard()`));

function editarCard() {
  alert('Acionou o editar! ');
}

function apagarCard() {
  let confirmar = confirm('Tem certeza que deseja excluir?');

  confirmar ? alert('Confirmado!') : alert('Cancelado!');
}
