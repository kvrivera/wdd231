// Grab the current URL for this page
// including the attached GET values
const currentURL = window.location.href;
console.log(currentURL);

// decide what split character you will use for the CurrentURL variable
const everything = currentURL.split('?');
console.log(everything);

// grab just the second half
let formData = everything[1];
console.log(formData);

// break the form name value pairs into an array
formData = formData.split('&');
console.log(formData);

function show(cup) {
    console.log(cup);

    formData.forEach((element) => {
        // ask if each element starts with the parameter we sent through the function (in this case, cup)
        if (element.startsWith(cup)) {
            // cut the, for eg: 'phone=' off
            // and now only show what is after, for eg: 'last.' (do this using [1])
            // .replace("%40", "@") fixes the coding for "@" that takes place when data is stored in a URL
            result = element.split("=")[1].replace("%40", "@");
            console.log(result);

        } // end if
    })
    return (result);
} // end show


// function to replace multiple substrings in the timestamp url value
function timestampReplace(timestamp) {
    timestamp = timestamp.replace(/%2F/g, "/");
    timestamp = timestamp.replace(/%2C/g, " ");
    timestamp = timestamp.replace(/%3A/g, ":")
    timestamp = timestamp.replace(/\+/g, " ");
    return timestamp;
}





// Once the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const showInfo = document.querySelector('#results');

    showInfo.innerHTML = `
    <p>Form submitted by: ${show('first')} ${show('last')}</p>
    <p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
    <p>Location: ${show("location-name").replace("+", " ")}</p>
    <p>Location type: ${show("locationType")}</p>
    <p>Application submitted: ${timestampReplace(show("timestamp"))}</p>
    `;

    // timestamp will show up something like this:
    // 12%2F10%2F2024%2C+1%3A13%3A33+AM
});












//const str = 'Enter to Learn; Go Forth to Serve';
//console.log(str.replace('Go forth', 'Graduate'));
// Enter to Learn; Graduate to Serve