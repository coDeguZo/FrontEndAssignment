const BASE_URL = "http://localhost:3000/donors"
const card = document.querySelector('.inner-card');


document.addEventListener("DOMContentLoaded", function(){
    fetchDonors()
    frontOfCard()
    backOfCard()
})

function fetchDonors(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(donors => donors.forEach(donor => renderDonors(donor)))
}


function frontOfCard(){
    const universityFrontImage = document.createElement("img")
    universityFrontImage.alt = "University Image"
    universityFrontImage.src = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BUSEGDVBRU3QPAPZ7B2Q2APV34.jpg"
    universityFrontImage.className = "front-image"
    
    const challengeTitle = document.createElement("h2")
    challengeTitle.innerText = "Class of 2017 Challenge"
    challengeTitle.className = "front-card-title"
    
    const challengeSubTitlte = document.createElement("h3")
    challengeSubTitlte.innerText = "For College of the Holy Cross"
    challengeSubTitlte.className = "front-card-subtitle"
    
    const challengePara = document.createElement("p")
    challengePara.innerText = "$25,000 is on the line.  Please make a gift today to honor Dean PAco and help 2017 reach 60%!"
    challengePara.className = "front-card-paragraph"
    
    const barChartDiv = document.createElement("div")
    // const barChartPercentage = document.createElement("p")
    // barChartPercentage.innerText = ""

    card.addEventListener('click', flipCard)
    
    document.querySelector(".front-card").append(universityFrontImage, challengeTitle, challengeSubTitlte, challengePara, barChartDiv)
}

function flipCard() {
    const flipClass = document.querySelector(".inner-card")
    flipClass.classList.add = "flip"
    this.classList.toggle('flip');
}

function backOfCard(){
    const univerityBackInfo = document.querySelector(".back-card")

    const challengeTitle = document.createElement("h1")
    challengeTitle.innerText = "Class of 2017 Challenge"

    univerityBackInfo.append(challengeTitle)
}



function renderDonors(donor){
    console.log(donor)
    // const donorBackCardDiv = document.createElement("div")

    // const donorNameP = document.createElement("p")
    // donorNameP.innerText = donor["name"]

    // donorBackCardDiv.append(donorNameP)
    // document.querySelector(".card").append(donorBackCardDiv)
}