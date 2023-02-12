let homePts = document.getElementById("home-pts");
let homeCount = 0;
let guestPts = document.getElementById("guest-pts");
let guestCount = 0;

function homeAddPt() {
    homeCount += 1;
    homePts.innerText = homeCount;
}
function homeAdd2Pts() {
    homeCount += 2;
    homePts.innerText = homeCount;
}
function homeAdd3Pts() {
    homeCount += 3;
    homePts.innerText = homeCount;
}

function guestAddPt() {
    guestCount += 1;
    guestPts.innerText = guestCount;
}
function guestAdd2Pts() {
    guestCount += 2;
    guestPts.innerText = guestCount;
}
function guestAdd3Pts() {
    guestCount += 3;
    guestPts.innerText = guestCount;
}