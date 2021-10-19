//Gestion du menu burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('#navigation');
const header  = document.querySelector('#Header');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    nav.classList.toggle('show');
    header.classList.toggle('show');
})