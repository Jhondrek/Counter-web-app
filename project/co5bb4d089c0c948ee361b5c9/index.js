//Score variables
let homeCurrentScore = parseInt(document.getElementById("home-score").innerText)
let guestCurrentScore = parseInt(document.getElementById("guest-score").innerText)
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

//home button variables
let homeBtnPlusOne = document.getElementById("home-btn-plusOne")
let homeBtnPlusTwo = document.getElementById("home-btn-plusTwo")
let homeBtnPlusThree = document.getElementById("home-btn-plusThree")

//guest button variables
let guestBtnPlusOne = document.getElementById("guest-btn-plusOne")
let guestBtnPlustwo = document.getElementById("guest-btn-plusTwo")
let guestBtnPlusthree = document.getElementById("guest-btn-plusThree")

function addOnePointHome() {
    homeCurrentScore += 1;
    homeScore.innerText = homeCurrentScore
}

function addTwoPointsHome() {
    homeCurrentScore += 2;
    homeScore.innerText = homeCurrentScore
}

function addThreePointsHome() {
    homeCurrentScore += 3;
    homeScore.innerText = homeCurrentScore
}

//Guest functions

function addOnePointGuest() {
    guestCurrentScore += 1
    guestScore.innerText = guestCurrentScore
}

function addTwoPointGuest() {
    guestCurrentScore += 2;
    guestScore.innerText = guestCurrentScore
}

function addThreePointGuest() {
    guestCurrentScore += 3;
    guestScore.innerText = guestCurrentScore
}

//resets

function resetHome() {
    homeScore.innerText = 0
    homeCurrentScore = 0
}

function resetGuest() {
    guestScore.innerText = 0
    guestCurrentScore = 0
}