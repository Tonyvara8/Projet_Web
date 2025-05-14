const menu = document.getElementById('menu');
const link = document.getElementById('list');
menu.addEventListener('click', function() {
    if (link.style.display === 'flex') {
        link.style.display = 'none';
    }
    else{
	link.style.display = 'flex';}
	console.log('ok');
});