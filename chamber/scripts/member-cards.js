const source = 'members.json'
const cards = document.querySelector('#cards');

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

const displayMembers = (members) => {
    // card build goes here
    cards.innerHTML = "";
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement('h2');
        let phoneNumber = document.createElement('p');
        phoneNumber.classList.add('phone-number'); // add class for CSS
        let address = document.createElement('p');
        address.classList.add('address'); // add class for CSS
        let url = document.createElement('p');
        url.classList.add('url'); // add class for CSS
        let logo = document.createElement('img');

        // <h2> for companyName
        companyName.textContent = `${member.name}`;

        // <p> for phoneNumber
        phoneNumber.textContent = `PHONE: ${member.phoneNumber}`;

        // <p> for address
        address.textContent = `ADDRESS: ${member.address}`;

        // <p> for URL
        url.innerHTML = `
            <a href="${member.url}">Website</a>
        `;

        // <img> attributes for logo
        logo.setAttribute('src', member.imgFile);
        logo.setAttribute('alt', `Business logo for ${member.name}.`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '150');

        // append so they show up on card
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(phoneNumber);
        card.appendChild(address);
        card.appendChild(url);

        cards.appendChild(card);
    })
}

//Store the response from the fetch() method in a const variable 
// named "response".

//Convert the response to a JSON object using the .json method and 
// store the results in a const variable named "data".

//Add a console.table() expression method to check the data 
// response at this point in the console window.