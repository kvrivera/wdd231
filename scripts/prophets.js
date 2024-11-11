
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'; // references the JSON resource
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); // fetch data from the JSON source url using the await fetch() method
    if (response.ok) {
        const data = await response.json(); // convert the data received to json
        // console.table(data.prophets); // test the fetch and response in the console window in dev tools
        displayProphets(data.prophets); // note that we reference the prophets array, not just the object
    }
}

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        cards.innerHTML = ""; // empty content first
        let card = document.createElement("section");
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophet.name} ${prophet.lastName}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);

    })
}
getProphetData(data.prophets); // call the function