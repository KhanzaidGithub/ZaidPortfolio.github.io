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


const scriptURL = ' https://script.google.com/macros/s/AKfycbxKv18IVqjU_FcG2-07U0gWuvN6e8pu-65SbCTFk4YxUK0cI5U4kkLwK7wfXi1qGW12/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById('msg');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent succesfully!';
            setTimeout(() => {
                msg.innerHTML = ''
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})



    // Typing CDN
  


    var typed = new Typed('#element', {
        strings: ['Front-End Developer.', 'HTML,CSS,Bootstrap and Js.', 'Mern Stack.'],
        typeSpeed: 50,
    });