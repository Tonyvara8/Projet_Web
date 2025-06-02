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
if(titre!== null) { 
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
document.getElementById("paccueil").style.opacity = "1";
document.getElementById("paccueil2").style.opacity = "1";
document.getElementById("lienmotiv").style.opacity = "1";


}, 2000)
});}


// ---------------------------------------------------------------------------------

        const videos = [
             "XzUKNwBWluU", // IT'S ABOUT THE LOVE FOR TRAINING - GOLDEN ERA GYM
  "FZHjtVlf_vk", // Brachial curls - Michael Gundill
  "YIstArpXdAQ", // Be That Guy | Best Motivational Speech Compilation
  "DWw7alL8FPo", // Les 4 MINUTES qui vont Transformer Votre VIE
 
        ];

        document.getElementById("whiteButton").addEventListener("click", function () {
            const randomIndex = Math.floor(Math.random() * videos.length);
            const selectedId = videos[randomIndex];
           
            const iframe = document.createElement("iframe");
            iframe.width = "960";
            iframe.height = "540";
            iframe.src = `https://www.youtube.com/embed/${selectedId}?autoplay=1`;
            iframe.title = "Motivation";
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; encrypted-media; picture-in-picture";
            iframe.allowFullscreen = true;

            const container = document.getElementById("videoContainer");
            container.innerHTML = ""; // vide le contenu précédent
            container.appendChild(iframe);
             let mot =document.getElementById("motiv5")
             mot.style.color = "red"; 
             mot.textContent="Générateur de motivation ! 🦾"

        });






