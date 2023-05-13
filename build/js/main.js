let header = document.querySelector('header');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navegacion');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
})

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('activa');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('activa');
}