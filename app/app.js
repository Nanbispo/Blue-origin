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