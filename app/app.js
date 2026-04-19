/**
 * REFERENCIA DA CLASSE DO HTML QUE ESTA SENDO ARMAZENADA EM VARIAVEIS PARA SEREM USADAS NO JAVASCRIPT
 * 1. barraSuperior: Armazena a referência da barra superior do menu, onde estão as opções de navegação.
 * 2. listaElemento: Armazena uma coleção de elementos que representam cada item da lista de opções na barra superior.
 * 3. botaoFlutuante: Armazena a referência do botão flutuante que se move para destacar o item da lista quando o mouse passa sobre ele.
 * 
 * 
 * EM ESPECIAL A VARIAVEL "listaElemento" É UMA COLEÇÃO DE ELEMENTOS, 
 * POR ISSO É USADO O MÉTODO "forEach" PARA ADICIONAR UM EVENTO DE MOUSE PARA CADA ITEM DA LISTA.
 */

const barraSuperior = document.querySelector(".barra_superior_opcoes");
const listaElemento = document.querySelectorAll(".lista_elemento");
const botaoFlutuante = document.querySelector(".barra_inferior");



listaElemento.forEach( item => {
    item.addEventListener('mouseenter', (e) => {
        const itemWidth = e.target.offsetWidth;
        const itemLeft = e.target.offsetLeft;
        
        botaoFlutuante.style.width = `${itemWidth}px`
        botaoFlutuante.style.left = `${itemLeft}px`

        
    })
})

barraSuperior.addEventListener('mouseleave', () => {
    botaoFlutuante.style.width = '0px';
});


/** FUNCIONAMENTO DO JAVASCRIPT NO FRONT-END
 * 1. O Ambiente de Execução (O Navegador)
O JavaScript no front-end roda diretamente na máquina do usuário, dentro do navegador (Chrome, Firefox, Safari, Edge). Quando você acessa um site, o servidor envia os arquivos de código para o seu computador. O navegador possui um componente chamado Motor JavaScript (como o motor V8 no Google Chrome ou o SpiderMonkey no Firefox) que lê o código JS, converte para uma linguagem que a sua máquina entende (código de máquina) e o executa instantaneamente.

2. Manipulação do DOM (Document Object Model)
Essa é a principal mágica do JS no front-end. Quando o navegador lê o HTML de uma página, ele cria uma representação estruturada dessa página na memória, chamada de DOM. O DOM parece uma árvore genealógica de todos os elementos da tela.

O JavaScript tem acesso direto a essa árvore. Isso significa que ele pode, em tempo real:

Criar novos elementos (como abrir um menu modal de repente).

Deletar elementos (como remover um item do seu carrinho de compras).

Alterar estilos (como mudar o botão de vermelho para verde quando clicado).

Modificar textos e imagens sem precisar recarregar a página inteira.

3. Escuta de Eventos (Event Listeners)
O JavaScript é movido a eventos. Ele pode ser configurado para ficar "escutando" as ações do usuário. Se você clica em um botão, arrasta uma imagem, rola a página ou digita uma senha, o navegador gera um "evento". O JavaScript captura esse evento e dispara uma função específica como resposta.

Exemplo: "Se o usuário clicar no botão 'Enviar', pegue o texto que ele digitou e mostre uma mensagem de 'Obrigado'."

4. Assincronismo e Comunicação com Servidores (APIs)
Antigamente, para atualizar uma informação na tela, você precisava recarregar a página inteira. Hoje, o JavaScript consegue trabalhar em segundo plano de forma assíncrona.
Através de recursos como a API Fetch (ou o antigo AJAX), o JavaScript consegue:

Ir até o servidor silenciosamente.

Buscar novos dados (como novos tweets, ou mensagens de chat).

Atualizar apenas uma pequena parte do DOM com essa nova informação, enquanto você continua navegando normalmente.
 */