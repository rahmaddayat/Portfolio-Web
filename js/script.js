// toggle class active
const navBarNav = document.querySelector('.navbar-nav');

// click hamburger-menu
document.querySelector('#hamburger-menu').onclick = (e) =>{
    e.preventDefault();
    
    navBarNav.classList.toggle('active')
}

const hamburger = document.querySelector('#hamburger-menu');

// click outside of the sidebar menu
document.addEventListener('click', function(e){
 if(!hamburger.contains(e.target) && !navBarNav.contains(e.target)){
    navBarNav.classList.remove('active');
 }
}) 