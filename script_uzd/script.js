//1.uzdevums

function ievade() {
    let vards = document.getElementById('varda_ievade').value;
    document.getElementById('varda_izvade').innerHTML = "Tavs ierakstītais vārds ir "+ vards;
}

//2.uzdevums
function atbilde_ir() {
    document.getElementById('atb_ir').style.background = 'green';
}
function atbilde_nav() {
    document.getElementById('atb_nav').style.background = 'red';
}

//3.uzdevums
function image() {
    document.getElementById('attels').style.display='none';
}

//4.uzdevums
function color() {
    document.body.style.background='pink';
}