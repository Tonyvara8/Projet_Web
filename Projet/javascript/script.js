const titre = document.getElementById("content");
window.addEventListener("load", () => {
setTimeout(() => {
    titre.style.top ="10%"; 


},1000)

setTimeout(() => {
    const citation= document.createElement("h2");
citation.textContent="Devenez la meilleure version de vous";
citation.setAttribute("id", "citation");

document.getElementById("accueil").appendChild(citation);}
, 2000)
});