// 1) On  va commencer par lier les éléments << input >> , << p >> et << button >>
// (qui ont un id unique) avec le fichier script.js, pour rendre l'application interactivité.
// Pour ce la on va utiliser <<document.getElementById('id de l'element HTML')>>;
// 2) << document >> représente la page HTML, plus précisément l'intérieur de la fenêtre du navigateur.

const movieName = document.getElementById('movieName');
const directorName = document.getElementById('directorName');
const releaseYear = document.getElementById('releaseYear');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const field3 = document.getElementById('field3');
const buttonSubmit = document.getElementById('buttonSubmit');


// 3) Ajouter à écouteur d'événement lorsque un utilisateur clique sur le bouton valider,
// et cela, en utilisant << addEventListener >> , qui est une méthode qui lie un gestionnaire
// d'événements à un élément sans remplacer les gestionnaires d'événements existants.

buttonSubmit.addEventListener('click', () => {
// 4) On va créer des conditions ( if, else if et else) pour gérer les différentes possibilités de réponse.
// 5) Récupérer les valeurs que les utilisateurs vont entrer dans les champs input, et cela, en utilisant le << variable.value >>
  if (movieName.value === '') {
// 6) << style >> est utilisé pour changer le style de l'élément HTML 
// Exemples : << style.color >> pour changer la couleur, << style.border >> pour créer une bordure.
    movieName.style.border = '2px solid red';
// 7) La propriété << innerHTML >> définit ou renvoie le contenu HTML (HTML interne) d'un élément.
    field1.innerHTML = 'Veuillez remplir ce champ';
  } else if (directorName.value === '') {
    directorName.style.border = '2px solid red';
    field3.innerHTML = 'Veuillez remplir ce champ';
  } else if (releaseYear.value === '') {
    releaseYear.style.border = '2px solid red';
    field2.innerHTML = 'Veuillez remplir ce champ';
// 8) La fonction isNaN() permet de déterminer si une valeur est NaN (Not A number)
  } else if (isNaN(releaseYear.value)) {
    releaseYear.style.border = '2px solid red';
    field2.innerHTML = 'veuillez indiquer une date(Année)';
  } else {
    alert(`The name of my favorite movie is : 
    ${movieName.value} 
    and it is written and created by : 
    ${directorName.value} 
    , was released on : 
    ${releaseYear.value}`);
    field1.innerHTML = '';
    field2.innerHTML = '';
    field3.innerHTML = '';
  }
  if (window.confirm && movieName.value !== '' && releaseYear.value !== '' && directorName.value !== '' && !isNaN(releaseYear.value)) {
    movieName.value = '';
    movieName.style.border = '';
    releaseYear.value = '';
    releaseYear.style.border = ''
    directorName.value = '';
    directorName.style.border = ''
  }
});
