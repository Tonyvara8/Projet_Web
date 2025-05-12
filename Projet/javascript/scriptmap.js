 const map = L.map('map').setView([48.8566, 2.3522], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);


 button= document.getElementById("searchbtn"); 
button.addEventListener('click',(event) =>{
const load =document.getElementById("chargement");
 load.style.display="block";
var ville = document.getElementById("bar");
var villeStock = ville.value; 
console.log(ville.value);
ville.value="";
console.log(villeStock);

 fetch(`https://nominatim.openstreetmap.org/search?city=${villeStock}&format=json`)  // documentation ==> (https://nominatim.org/release-docs/latest/api/Search/)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      map.setView([lat, lon], 11);
    } else {
      alert("Aucune ville trouvée");
    }
  })
  .catch(error => {
      console.error("Erreur fetch Overpass :", error);
  });
     
 map.once('moveend', () => {
    const bounds = map.getBounds();    // Donne les limites de la map
    const recherche = `
      [out:json][timeout:25];
      nwr["leisure"="fitness_centre"](${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()});  
      out geom;`;
    //envoie la requête a l'api mais en se concentrant sur la zone affiche sur la carte qu'on centrera sur la ville de l'utilisateur (https://overpass-turbo.eu/ ==> convertit les filtre en requête)

    // la requête avec fetch()
    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",   // envoie la requête
      body: recherche  //envoi la requête recherche 
    })
    .then(response => response.json()) //convertit la réponse en JSON
    .then(data => {
        data.elements.forEach(element => {
            console.log(element); // Affiche les éléments dans la console
      const lat = element.lat ; // Récupère la latitude 
      const long= element.lon; // Récupère la longitude
      const nomsalle =element.tags.name || "salle de sport"; // Récupère le nom de la salle ou si y'a pas => salle de sport
       if(lat&&long){
        L.marker([lat, long]).addTo(map).bindPopup(nomsalle);   // affiche un popup au marqueur de la salle avec son nom
       } ;}
      );
      load.style.display="none";
      setTimeout(() => {},3000);
      })
      .catch(error => {
        console.error("Erreur avec Overpass API:", error);
      });
    })});