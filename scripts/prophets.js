
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'; // references the JSON resource
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url); // fetch data from the JSON source url using the await fetch() method
    const data = await response.json(); // convert the data received to json
    // console.table(data.prophets); // test the fetch and response in the console window in dev tools
    displayProphets(data.prophets); // note that we reference the prophets array, not just the object
}

getProphetData(url);

const displayProphets = (prophets) => {
    // card build code goes here
    cards.innerHTML = ""; // empty content first
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let bday = document.createElement('p');
        let birthplace = document.createElement('p');

        // <h2> for prophet's name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // img attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // bday <p>
        bday.innerText = `Date of Birth: ${prophet.birthdate}`;

        // birthplace <p>
        birthplace.innerText = `Place of Birth: ${prophet.birthplace}`;

        // appending so they show up
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(bday);
        card.appendChild(birthplace);

        cards.appendChild(card);

    });
}
getProphetData(data.prophets); // call the function