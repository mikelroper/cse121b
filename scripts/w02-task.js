/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Mikel Roper";
let currentYear = "2023";
let profilePicture = "images/me.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
// query selector selects the img tag where placeholder image is found.
var imageElement = document.querySelector('img[alt="Placeholder Image"]');
imageElement.src = profilePicture;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear.toString();
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Mexican', 'Quenepas','Nacatamales'];

foodElement.innerHTML = favFoods.join('<br>');
const newFavoriteFood = 'Sushi';

favFoods.push(newFavoriteFood);

// Append the updated favorite foods array with line breaks
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favFoods.shift();

// Append the modified array after removal with line breaks
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favFoods.pop();

// Append the final modified favorite foods array with line breaks
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;