'use strict'

let open = false
var seconds = 1;
const menuSize = '558px';

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#botao1').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#botao2').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

function toggleMenu() {
    if (open) {
        /*Abre o menu vertical*/
        document.querySelector('#menu').style.marginRight = `${menuSize}`;
        document.querySelector('body').style.overflow = 'hidden';
        return;
    }
    /*Fecha o menu vertical*/
    document.querySelector('#menu').style.marginRight = 0;
    document.querySelector('body').style.overflow = 'auto';
}


window.onscroll = function() {
    scrollFunction()
};
      
function scrollFunction() {
    if (document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40)
    {
        document.getElementById("nav").style.height = "60px";
              
        document.getElementById("logo").style.height = "40px";
        
        document.getElementById("logo").style.marginTop = "10px";

        document.getElementById("sobre-mim").style.marginTop = "100px";

        document.getElementById("nav").style.transition = ".5s";

        document.getElementById("logo").style.transition = ".5s";

        document.getElementById("sobre-mim").style.transition = ".5s";
    } 
    else {
        document.getElementById("nav").style.height = "120px";
                      
        document.getElementById("logo").style.height = "90px";

        document.getElementById("logo").style.marginTop = "15px";

        document.getElementById("sobre-mim").style.marginTop = "0px";
    }
}