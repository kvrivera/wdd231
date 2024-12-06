// Reference HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=5ef6b1edec6f158631045e6f787dce3e';

// Asynchronous function using a try block
async function apiFetch() {
    try {
        const response = await fetch(url); // fetch data from API
        if (response.ok) {
            const data = await response.json(); // convert the data received to JSON
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();

// Run the page locally and view the console output. 
// Find the current temperature (temp) and the weather 
// event description (weather.description), and image 
// icon reference (weather[0].icon - 3 characters) in 
// the data.

function displayResults(data) {
    currentTemp.innerHTML = `${data.temp}&#8451;`; // show the temperature in degrees C
    const iconsrc = `https://openweathermap.org/img/w/10d.png`; // weather icon
    let desc = data.weather[0].icon;
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${desc}`;
}