let start = document.querySelector('#start');
let menu = document.querySelector('#startmenu');
start.addEventListener('click',()=> {
    if (menu.style.bottom == '55px') {
        menu.style.bottom = '-655px';
    }
    else {
        menu.style.bottom = '55px';
    }
})