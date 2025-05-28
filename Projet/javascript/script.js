const menu = document.getElementById('menu');
const link = document.getElementsByClassName('nav-link')[0];
menu.addEventListener('click', function() {
    let open = document.getElementById('open');
    if (open === null) {
        open = document.createElement('div');
        open.setAttribute('id', 'open');
        link.appendChild(open);
        console.log('caa');
    }
    else {
        link.style.display = 'flex';
    }
    console.log('ok');
});