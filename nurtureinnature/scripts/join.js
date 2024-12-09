// Grab the current URL for this page
// including the attached GET values
const currentURL = window.location.href; 

// decide what split character you will use for the CurrentURL variable
const words = currentURL.split('-'); 

const str = 'Enter to Learn; Go Forth to Serve';
console.log(str.replace('Go forth', 'Graduate'));
// Enter to Learn; Graduate to Serve