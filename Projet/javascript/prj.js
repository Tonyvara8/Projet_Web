const form = document.getElementById('userForm');
    const summary = document.getElementById('summary');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const age = parseInt(document.getElementById("age").value);
      const sex = document.getElementById("sex").value;
      const height = parseInt(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);
      const steps = parseInt(document.getElementById("steps").value) || 0;

      if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        summary.innerHTML = `<p style="color:red;">Veuillez remplir tous les champs obligatoires.</p>`;
        return;
      }


      let BMR;
      if (sex === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      }


      const caloriesSteps = steps * 0.05;

      const TDEE = Math.round(BMR + caloriesSteps);

      summary.innerHTML = `
        <h3>Résumé :</h3>
        <ul>
          <li><strong>Âge :</strong> ${age} ans</li>
          <li><strong>Sexe :</strong> ${sex === 'male' ? 'Homme' : 'Femme'}</li>
          <li><strong>Taille :</strong> ${height} cm</li>
          <li><strong>Poids :</strong> ${weight} kg</li>
          <li><strong>Pas par jour :</strong> ${steps}</li>
          <li><strong>TDEE estimé :</strong> ${TDEE} kcal/jour</li>
        </ul>
      `;
    });