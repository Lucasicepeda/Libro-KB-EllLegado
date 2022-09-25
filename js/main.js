let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('showText');

    if (hideText.classList.contains('showText')) {
        readMore_btn.innerHTML = 'LEER MENOS'
    }
    else {
        readMore_btn.innerHTML = 'LEER MÁS'
    }
}


let readMore_btn2 = document.getElementById('readMore_btn2');
let hideText2 = document.getElementById('hideText2');

readMore_btn2.addEventListener('click', toggleText2);

function toggleText2() {
    hideText2.classList.toggle('showText2');

    if (hideText2.classList.contains('showText2')) {
        readMore_btn2.innerHTML = 'LEER MENOS'
    }
    else {
        readMore_btn2.innerHTML = 'LEER MÁS'
    }
}