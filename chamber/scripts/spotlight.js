const source = 'members.json'
const cards = document.querySelector('#spotlight');

// Create an async defined function named "getMemberData" 
// to fetch data from the JSON source url using the await 
// fetch() method.

async function getMemberData() {
    const response = await fetch(source);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}

getMemberData();
function getRandomMembers(array, numMembers) {
    const result = []; // This is the array where the function will store the members
    const selectedIndices = []; // This array will track the indices (indexes) we have already used so we don't have duplicates

    //while we still don't have the number of Members we need:
    while (result.length < numMembers) {
        // generate a random index using Math
        const randomIndex = Math.floor(Math.random() * array.length); // Math.floor makes sure that the random number rounds down so that it always is within the array's indices

        // if this index hasn't already been selected, then 1.) add it to the randomly chosen members array, 2.) add it now to the selectedIndices array so it won't be chosen next time
        if (!selectedIndices.includes(randomIndex)) {
            result.push(array[randomIndex]);
            selectedIndices.push(randomIndex);
        }
    }

    return result; // This will return the array of randomly chosen members
}

const displayMembers = (members) => {
    // card build goes here
    cards.innerHTML = " ";
    // get random members
    const randomMembers = getRandomMembers(members, 3);
    randomMembers.forEach((randomMember) => {
        let card = document.createElement("section");
        let companyName = document.createElement('h2');
        let address = document.createElement('p');
        //address.classList.add('address'); // add class for CSS
        let phoneNumber = document.createElement('p');
        //phoneNumber.classList.add('phone-number'); // add class for CSS
        let url = document.createElement('p');
        //url.classList.add('url'); // add class for CSS
        let logo = document.createElement('img');

        // <h2> for companyName
        companyName.textContent = `${randomMember.name}`;

        // <p> for phoneNumber
        phoneNumber.textContent = `PHONE: ${randomMember.phoneNumber}`;

        // <p> for address
        address.textContent = `ADDRESS: ${randomMember.address}`;

        // <p> for URL
        url.innerHTML = `
            <a href="${randomMember.url}">Website</a>
        `;

        // <img> attributes for logo
        logo.setAttribute('src', randomMember.imgFile);
        logo.setAttribute('alt', `Business logo for ${randomMember.name}.`);
        logo.setAttribute('loading', 'lazy');
        //logo.setAttribute('width', '150');
        //logo.setAttribute('height', '75');

        // append so they show up on card
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(phoneNumber);
        card.appendChild(address);
        card.appendChild(url);

        cards.appendChild(card);
    })
}