/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mikel Roper",
    photo: "images/me.jpg",
    favoriteFoods: [
        'Pizza', 'Mexican', 'Quenepas','Nacatamales'
    ],
    hobbies: [
        'Martial Arts', 'Video Games', 'Reading'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Denver, Colorado', 
        length: '43 years',
    }
)
myProfile.placesLived.push(
    {
        place: 'Nicaragua',
        length: '2 years' ,
    }
)
myProfile.placesLived.push(
    {
        place: 'Provo, Utah',
        length: '1 year'
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let imageElement = document.querySelector('#photo'); 
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
let favoriteFoodslist = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})
/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived')
myProfile.placesLived.forEach(place => {
    // Create a <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    // Create a <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    // Append <dt> and <dd> to the <dl> element
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

