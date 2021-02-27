const movieName = document.getElementById('movieName');
const directorName = document.getElementById('directorName');
const releaseYear = document.getElementById('releaseYear');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const field3 = document.getElementById('field3');
const buttonSubmit = document.getElementById('buttonSubmit');


buttonSubmit.addEventListener('click', () => {

  if (movieName.value === '') {
    movieName.style.border = '2px solid red';
    field1.innerHTML = 'Veuillez remplir ce champ';
  } else if (directorName.value === '') {
    directorName.style.border = '2px solid red';
    field3.innerHTML = 'Veuillez remplir ce champ';
  } else if (releaseYear.value === '') {
    releaseYear.style.border = '2px solid red';
    field2.innerHTML = 'Veuillez remplir ce champ';
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
