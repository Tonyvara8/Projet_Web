const menu = document.getElementById('menu');
const list = document.getElementById('list');
menu.addEventListener('click', function() {                  // avec les media queries, ca sert a quand l'icone du menu est affiché, on peut cliquer pour afficher l'onglet du menu ou le fermer
    if (list.style.display === 'flex') {
        list.style.display = 'none';
    } else {
        list.style.display = 'flex';
        list.style.flexDirection = 'column'; 
    }
});




const titre = document.getElementById("content");       
window.addEventListener("load", () => {      //anime le texte d'accueil
setTimeout(() => {
    titre.style.top ="10%"; 


},1000)

setTimeout(() => {
    const citation= document.createElement("h2");
citation.textContent="Devenez la meilleure version de vous";
citation.setAttribute("id", "citation");

const pAccueil = document.getElementById("paccueil");

document.getElementById("accueil").insertBefore(citation, pAccueil);
document.getElementById("paccueil").style.opacity="1";

}, 2000)
});