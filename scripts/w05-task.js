/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList=[];
/* async displayTemples Function */
const displayTemples = (temples) => {
    console.log("Displaying Temples:", temples); // Add
    temples.forEach((temple) => {
        //Create HTML <article> element.
        const articleElement = document.createElement('article');
      
        // Create HTML <h3> element and add the temple's templeName property to it.
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
      
        // Create HTML <img> element, set its src and alt attributes.
        const imgElement = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
      
        // Append the <h3> element and the <img> element to the <article> element.
        article.appendChild(h3);
        article.appendChild(img);
      
        // Append the <article> element to the global templesElement variable.
        templesElement.appendChild(article);
      });
};



/* async getTemples Function using fetch()*/
/*async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();
    console.log(temples);

} */
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();
    templeList = temples;
    console.log(templeList);
    console.log("Temple List:", templeList); // Add
};

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById("temples"); 
  
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };

/* sortBy Function */
const sortBy = (temples) => {
    console.log("Sorting Temples:", temples); // Add
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
          // Filter for temples where the location contains "Utah" as a substring
          displayTemples(temples.filter((temple) => temple.location.toLowerCase().includes("utah")));
          break;
        case "notutah":
          // Filter for temples where the location does not contain "Utah" as a substring
          displayTemples(temples.filter((temple) => !temple.location.toLowerCase().includes("utah")));
          break;
        case "older":
          // Filter for temples where the dedicated date is before 1950
          displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
          break;
        case "all":
          // No filter, use all temples
          displayTemples(temples);
          break;
        default:
          console.error("Invalid filter value");
          break;
      }
};





/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
    getTemples();
  });

getTemples();