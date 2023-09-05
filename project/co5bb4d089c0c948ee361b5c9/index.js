//Score variables
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-Score")
let homeCurrentScore = parseInt(document.getElementById("home-score").innerText) 
//home button variables
let homeBtnPlusOne = document.getElementById("home-btn-plusOne")
let homeBtnPlusTwo = document.getElementById("home-btn-plusTwo")
let homeBtnPlusThree = document.getElementById("home-btn-plusThree")

//guest button variables
let guestBtnPlusOne = document.getElementById("guest-btn-plusOne")
let guestBtnPlustwo = document.getElementById("guest-btn-plusTwo")
let guestBtnPlusthree = document.getElementById("guest-btn-plusThree")

function addOnePointHome(){
    homeCurrentScore +=1;
    homeScore.innerText = homeCurrentScore
}

function addtwoPointsHome(){
    homeCurrentScore +=2;
    homeScore.innerText = homeCurrentScore
}

function addthreePointsHome(){
    homeCurrentScore +=3;
    homeScore.innerText = homeCurrentScore
}

