// responsive coding for the menu


// hamburger button when in mobile view
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});