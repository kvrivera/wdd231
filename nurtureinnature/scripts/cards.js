const source = 'places.json'
const cards = document.querySelector('.cards');

// Create an async defined function named "getMemberData" 
// to fetch data from the JSON source url using the await 
// fetch() method.

async function getPlacesData() {
    const response = await fetch(source);
    const data = await response.json();
    allPlaces = data.places; // store fetched data so I don't have to grab it again and again
    //console.table(data.members);
    displayPlaces(allPlaces);
}

getPlacesData(); // this shows all the places when the page is first rendered

const displayPlaces = (places) => {
    // card build goes here
    cards.innerHTML = ""; // Clear existing cards
    places.forEach((place) => {
        let card = document.createElement("section");
        let placeName = document.createElement('h3');
        let address = document.createElement('p');
        let playground = document.createElement('p');
        let bathrooms = document.createElement('p');
        let accessibleWalk = document.createElement('p');
        let imgPark = document.createElement('img');

        // populate elements with place data
        placeName.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        // playground data
        if (place.playground == "yes") {
            playground.textContent = `✅ playground`
        }
        else if (place.playground != "yes") {
            playground.textContent = `❌ playground`
        };
        // bathrooms data
        if (place.bathrooms == "yes") {
            bathrooms.textContent = `✅ bathrooms`
        }
        else if (place.bathrooms != "yes") {
            bathrooms.textContent = `❌ bathrooms`
        }
        // accessibleWalk data
        if (place.accessibleWalkway == "yes") {
            accessibleWalk.textContent = `✅ accesible path`
        }
        else if (place.accessibleWalkway != "yes") {
            accessibleWalk.textContent = `❌ accesible path`
        }
        // <img> attributes for logo
        //logo.setAttribute('src', member.imgFile);
        //logo.setAttribute('alt', `Business logo for ${member.name}.`);
        //logo.setAttribute('loading', 'lazy');
        //logo.setAttribute('width', '150');
        //logo.setAttribute('height', '75');

        // append so they show up on card
        //card.appendChild(logo);
        card.appendChild(placeName);
        card.appendChild(address);
        card.appendChild(playground);
        card.appendChild(bathrooms);
        card.appendChild(accessibleWalk);

        cards.appendChild(card);
    })
}

function displayFilterPlaces(places, filterWord, decider) {
    // filtered card build goes here
    cards.innerHTML = ""; // Clear existing cards
    const filteredPlaces = places.filter(place => place[filterWord] && place[filterWord].includes(decider)); // check to see if the filterWord contains the decider (eg: if playground says "yes")

    filteredPlaces.forEach((place) => {
        let card = document.createElement("section");
        let placeName = document.createElement('h3');
        let address = document.createElement('p');
        let playground = document.createElement('p');
        let bathrooms = document.createElement('p');
        let accessibleWalk = document.createElement('p');
        let imgPark = document.createElement('img');

        // populate elements with place data
        placeName.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        // playground data
        if (place.playground == "yes") {
            playground.textContent = `✅ playground`
        }
        else if (place.playground != "yes") {
            playground.textContent = `❌ playground`
        };
        // bathrooms data
        if (place.bathrooms == "yes") {
            bathrooms.textContent = `✅ bathrooms`
        }
        else if (place.bathrooms != "yes") {
            bathrooms.textContent = `❌ bathrooms`
        }
        // accessibleWalk data
        if (place.accessibleWalkway == "yes") {
            accessibleWalk.textContent = `✅ accesible path`
        }
        else if (place.accessibleWalkway != "yes") {
            accessibleWalk.textContent = `❌ accesible path`
        }
        // <img> attributes for logo
        //logo.setAttribute('src', member.imgFile);
        //logo.setAttribute('alt', `Business logo for ${member.name}.`);
        //logo.setAttribute('loading', 'lazy');
        //logo.setAttribute('width', '150');
        //logo.setAttribute('height', '75');

        // append so they show up on card
        //card.appendChild(logo);
        card.appendChild(placeName);
        card.appendChild(address);
        card.appendChild(playground);
        card.appendChild(bathrooms);
        card.appendChild(accessibleWalk);

        cards.appendChild(card);
    })
}

// query the filter buttons
const allButton = document.querySelector("#all");
const playgroundsButton = document.querySelector("#playgrounds");
const splashpadsButton = document.querySelector("#splashpads");
const bathroomsButton = document.querySelector("#bathrooms");
const accessibleWalkButton = document.querySelector("#accessibleWalk");
const picnicButton = document.querySelector("#picnic");

// add event listeners
allButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    allButton.classList.toggle('open');
    getPlacesData();
})

playgroundsButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    // add 'open' class to current button
    playgroundsButton.classList.toggle('open');
    // create filter
    displayFilterPlaces(allPlaces, "playground", "yes");
})

splashpadsButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    // add 'open' class to current button
    splashpadsButton.classList.toggle('open');
    // create filter
    displayFilterPlaces(allPlaces, "type", "splashpad");
})

bathroomsButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    // add 'open' class to current button
    bathroomsButton.classList.toggle('open');
    // create filter
    displayFilterPlaces(allPlaces, "bathrooms", "yes");
})

accessibleWalkButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    // add 'open' class to current button
    accessibleWalkButton.classList.toggle('open');
    // create filter
    displayFilterPlaces(allPlaces, "accessibleWalkway", "yes");
})

picnicButton.addEventListener('click', () => {
    // remove all other button classes (except hamburger)
    document.querySelectorAll("button:not(#hamburger)").forEach(button => button.classList.remove('open'));
    // add 'open' class to current button
    picnicButton.classList.toggle('open');
    displayFilterPlaces(allPlaces, "picnic", "tables");
})


// ideas for filters:
// all locations
// playgrounds
// splashpads
// trails
// places with bathrooms
// places with accessible paths
// places with picnic tables