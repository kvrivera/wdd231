const source = 'places.json'
const cards = document.querySelector('.cards');

// Create an async defined function named "getMemberData" 
// to fetch data from the JSON source url using the await 
// fetch() method.

async function getPlacesData() {
    const response = await fetch(source);
    const data = await response.json();
    //console.table(data.members);
    displayPlaces(data.places);
}

getPlacesData();

const displayPlaces = (places) => {
    // card build goes here
    cards.innerHTML = " ";
    places.forEach((place) => {
        let card = document.createElement("section");
        let placeName = document.createElement('h3');
        let address = document.createElement('p');
        let playground = document.createElement('p');
        let bathrooms = document.createElement('p');
        let accessibleWalk = document.createElement('p');
        let imgPark = document.createElement('img');

        // <h3> for companyName
        placeName.textContent = `${place.name}`;

        // <p> for address
        address.textContent = `${place.address}`;

        // <p> for playground
        if (place.playground == "yes") {
            playground.textContent = `✅ playground`
        }
        else if (place.playground != "yes") {
            playground.textContent = `❌ playground`
        };

        // <p> element for bathrooms
        if (place.bathrooms == "yes") {
            bathrooms.textContent = `✅ bathrooms`
        }
        else if (place.bathrooms != "yes") {
            bathrooms.textContent = `❌ bathrooms`
        }

        // <p> for accessibleWalk 
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

// ideas for filters:
// playgrounds
// splashpads
// trails
// places with bathrooms
// places with accessible paths
// places with picnic tables
// trails