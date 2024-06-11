// script.js

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    document.getElementById(tabname).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
}

// -------Menu for Mobile--------

let sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0px';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}


// Contact data bas


const scriptURL = 'https://script.google.com/macros/s/AKfycbxKxdPIN_nZDZYI6EUbZoa7QlmCrBaOdN0y_lcaed7MWUSM2htgu7JNitYbw-B95ECT/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})