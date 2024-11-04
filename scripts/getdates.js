// HTML id = currentYear
// get the year 
let currentYear = document.querySelector("#currentyear");
// use the date object
const todaysDate = new Date();
// pick out the year from todaysDate, insert into HTML
currentYear.innerHTML = `<span class="currentYear">${todaysDate.getFullYear()}</span>`

// HTML id = lastModified
// get the date and time the document was last modified:
let lastMod = document.querySelector("#lastModified");
// convert the lastModified property into a date object:
const dateLastMod = document.lastModified;
// pick out only the Month, date, year, hours, mins, seconds
document.getElementById("lastModified").innerHTML = `Last Modified: <span class="lastMod">${dateLastMod}</span>`
// why does this next line not work, instead of the line above?
//lastMod.innerHTML = `<span class="lastMod">${dateLastMod.getFull()}</span>`