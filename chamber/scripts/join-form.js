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
    console.log(cup)

    formData.forEach((element) => {
        console.log(element);
        // ask if each element starts with the parameter we sent through the function (in this case, cup)
        if (element.startsWith(cup)) {
            // cut the, for eg: 'phone=' off
            // and now only show what is after, for eg: 'last.' (do this using [1])
            // .replace("%40", "@") fixes the coding for "@" that takes place when data is stored in a URL
            result = element.split("=")[1].replace("%40", "@");

        } // end if
        return (result)
    })

} // end show

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Form submitted by: ${show("first")} ${show("last")}</p>
<p>Organization: ${show("")}</p>
`;
// this will show, for eg: phone=2098340928
// let's find a way to remove 'phone=' from the result...









//const str = 'Enter to Learn; Go Forth to Serve';
//console.log(str.replace('Go forth', 'Graduate'));
// Enter to Learn; Graduate to Serve