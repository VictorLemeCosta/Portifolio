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

document.querySelector('#ocultar').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#oculta').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

function toggleMenu() {
    if (open) {
        /*Abre o menu vertical*/
        document.querySelector('#menu').style.marginRight = `${menuSize}`;
        return;
    }
    /*Fecha o menu vertical*/
    document.querySelector('#menu').style.marginRight = 0;
}


window.onscroll = function() {
    scrollFunction()
};
      
function scrollFunction() {
    if (document.body.scrollTop > 55 ||
        document.documentElement.scrollTop > 55)
    {
        document.getElementById("nav").style.height = "60px";
              
        document.getElementById("logo").style.height = "40px";
        
        document.getElementById("logo").style.marginTop = "10px";

        document.getElementById("sobre-mim").style.marginTop = "100px";
    } 
    else {
        document.getElementById("nav").style.height = "120px";
                      
        document.getElementById("logo").style.height = "90px";

        document.getElementById("logo").style.marginTop = "15px";

        document.getElementById("sobre-mim").style.marginTop = "0px";
    }
}