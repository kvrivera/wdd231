// timestamp code
const form = document.querySelector('.queryForm');
const timestampField = document.querySelector('#timestamp');

form.addEventListener('submit', (event) => {
    const date = new Date(); // creates a Date object with current date and time
    const formattedDateTime = date.toLocaleString(); // this formats the string to a human readable string
    // set the timestamp
    timestampField.value = formattedDateTime;
});