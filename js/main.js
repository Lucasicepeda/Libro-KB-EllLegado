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

let btnD = document.getElementById('btnD');
let hideDamian = document.getElementById('hideDamian');
btnD.addEventListener('click', toggleText3);
function toggleText3() {
    hideDamian.classList.toggle('showDamian');
}

let btnConnie = document.getElementById('btnConnie');
let hideConnie = document.getElementById('hideConnie');
btnConnie.addEventListener('click', toggleText4);
function toggleText4() {
    hideConnie.classList.toggle('showConnie');
}



let btnOrville = document.getElementById('btnOrville');
let hideOrville = document.getElementById('hideOrville');
btnOrville.addEventListener('click', toggleText5);
function toggleText5() {
    hideOrville.classList.toggle('showOrville');
}
let btnDionisio = document.getElementById('btnDionisio');
let hideDionisio = document.getElementById('hideDionisio');
btnDionisio.addEventListener('click', toggleText6);
function toggleText6() {
    hideDionisio.classList.toggle('showDionisio');
}