import { apiUrl } from './apiModule.js';
import { catFacts } from './catFacts.js';

// Declare and initialize global variables
const catsElement = document.getElementById('cats');
//const apiUrl = 'https://cataas.com/cat';


/* async displayCat Function */
const displayCat = (catImageUrl) => {
    // Create HTML <img> element and set its src attribute
    const imgElement = document.createElement('img');
    imgElement.src = catImageUrl;
  
    // Append the <img> element to the global catsElement
    catsElement.appendChild(imgElement);
}


/* async fetchCatImage Function */
const fetchCatImage = async () => {
  try {
      // Select a random cat fact from the array
      const randomCatFact = catFacts[Math.floor(Math.random() * catFacts.length)];

      const response = await fetch(apiUrl, {
          cache: 'no-store',
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const catImageUrl = await response.url;

      return { catImageUrl, randomCatFact };
  } catch (error) {
      console.error('Error:', error);
      return null;
  }
}


/* Event Listener for "See Cats" button */
document.querySelector('#seeCatsButton').addEventListener('click', async () => {
  try {
    // Fetch a cat image and a random cat fact
    const { catImageUrl, randomCatFact } = await fetchCatImage();

    if (catImageUrl) {
      displayCat(catImageUrl);
      displayCatFact(randomCatFact);

      // Check if the cat fact contains the word "sleep"
      if (randomCatFact.toLowerCase().includes('sleep')) {
        document.body.style.backgroundColor = 'lightblue';

      } else {
        document.body.style.backgroundColor = 'lightgray';
        document.body.style.color = 'black';
      }
    } else {
      console.error('Failed to fetch a cat image.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

document.getElementById('sortBy').addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  if (selectedValue === 'whiskers') {
    // Display whiskers facts
    displayCatFactsByCategory('whiskers');
  } else if (selectedValue === 'allcats') {
    displayAllCatFacts();
  }
});

// Function to display the cat fact
const displayCatFactsByCategory = (category) => {
  const catFactsContainer = document.getElementById('cats');
  catFactsContainer.innerHTML = ''; 

  const filteredFacts = catFacts.filter((fact) => {
    if (category === 'whiskers') {
      return fact.includes('whiskers');
    }
  });

  // Display the filtered cat facts
  filteredFacts.forEach((fact) => {
    const catFactElement = document.createElement('p'); 
    catFactElement.textContent = fact;
    catFactsContainer.appendChild(catFactElement);
  });
};

// Function to display all cat facts
const displayAllCatFacts = () => {
  const catFactsContainer = document.getElementById('cats');
  catFactsContainer.innerHTML = ''; 

  // Display all cat facts
  catFacts.forEach((fact) => {
    const catFactElement = document.createElement('p'); 
    catFactElement.textContent = fact;
    catFactsContainer.appendChild(catFactElement);
  });
};

// Function to display a cat fact
const displayCatFact = (fact) => {
  const catFactsContainer = document.getElementById('cats');
  const catFactElement = document.createElement('p');
  catFactElement.textContent = fact;
  catFactsContainer.appendChild(catFactElement);
};


