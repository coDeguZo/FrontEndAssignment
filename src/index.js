const BASE_URL = "http://localhost:3000/donors"
const card = document.querySelector('.inner-card');

document.addEventListener("DOMContentLoaded", function(){
    fetchDonors()
    backOfCard()
})

function fetchDonors(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then( function (donors) {
        donors.forEach(donor => renderDonors(donor))
        let totalAmount = donors.reduce((currentValue, donation) => {
            return currentValue + donation.amount
        }, 0)
        let totalDonors = donors.length
        renderTotal(totalAmount)
        frontOfCard(totalAmount, totalDonors)
})  
}


function frontOfCard(total, donors){
    const universityFrontImage = document.createElement("img")
    universityFrontImage.alt = "University Image"
    universityFrontImage.src = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BUSEGDVBRU3QPAPZ7B2Q2APV34.jpg"
    universityFrontImage.className = "front-image"
    
    const challengeTitle = document.createElement("p")
    challengeTitle.innerText = "Class of 2017 Challenge"
    challengeTitle.className = "front-card-title"
    
    const challengeSubTitle = document.createElement("p")
    challengeSubTitle.innerText = "For College of the Holy Cross"
    challengeSubTitle.className = "front-card-subtitle"
    
    const challengePara = document.createElement("p")
    challengePara.innerText = "$25,000 is on the line.  Please make a gift today to honor Dean PAco and help 2017 reach 60%!"
    challengePara.className = "front-card-paragraph"
    
    const chartDiv = document.querySelector(".bar-chart")

    const column1Percent = document.querySelector(".column1")
    const barChartPercentage = document.createElement("p")
    barChartPercentage.innerText = "17%"
    column1Percent.append(barChartPercentage)

    const column2Donors = document.querySelector(".column2")
    const barChartDonors = document.createElement("p")
    barChartDonors.innerText = `${donors} Donors`
    column2Donors.append(barChartDonors)

    const column3Active = document.querySelector(".column3")
    const barChartActive = document.createElement("p")
    barChartActive.innerText = "Active"
    column3Active.append(barChartActive)

    const column4Total = document.querySelector(".column4")
    const barChartTotal = document.createElement("p")
    barChartTotal.innerText = `$${Math.round(total)} Donated`
    column4Total.append(barChartTotal)

    card.addEventListener('click', flipCard)
    
    document.querySelector(".front-card").append(universityFrontImage, challengeTitle, challengeSubTitle, challengePara, chartDiv)
}

function flipCard() {
    const flipClass = document.querySelector(".inner-card")
    flipClass.classList.add = "flip"
    this.classList.toggle('flip');
}

function backOfCard(){
    const univerityBackInfo = document.querySelector(".inner-back-card-info")
    const universityBottomBackInfo = document.querySelector(".inner-back-bottom-info")


    const table = document.querySelector(".table")
    const tableRow = document.createElement("tr")
    const donorTableHeader1 = document.createElement("th")
    donorTableHeader1.className = "donor"
    donorTableHeader1.innerText = "Donor"
    const donorTableHeader2 = document.createElement("th")
    donorTableHeader2.innerText = "Dollars"
    donorTableHeader2.className = "dollars"
    const donorTableHeader3 = document.createElement("th")
    donorTableHeader3.className = "type"
    donorTableHeader3.innerText = "Type"

    const backTitle = document.createElement("p")
    backTitle.innerText = "Class of 2017 Challenge"
    backTitle.className = "back-title"

    const backSubTitle = document.createElement("p")
    backSubTitle.innerText = "Top 10 donors"
    backSubTitle.className = "back-subtitle"

    const donorTitle = document.createElement("h2")
    donorTitle.innerText = "Donor"
    const donorDollars = document.createElement("h2")
    donorDollars.innerText = "Dollars"
    const donorType = document.createElement("h2")
    donorType.innerText = "Type"

    const buttonDiv = document.createElement("div")
    buttonDiv.className = "gift-button-container"
    const giftButton = document.createElement("button")
    giftButton.className = "gift-button"
    giftButton.innerHTML = "MAKE A GIFT"

    tableRow.append(donorTableHeader1, donorTableHeader2, donorTableHeader3)
    table.append(tableRow)

    univerityBackInfo.append(backTitle, backSubTitle)

    buttonDiv.append(giftButton)
    universityBottomBackInfo.append(buttonDiv)
}

function renderDonors(donor){
    const table = document.querySelector(".table")
    const tableRow = document.createElement("tr")

    const donorName = document.createElement("td")
    donorName.innerText = donor["name"]

    const donorDollars = document.createElement("td")
    donorDollars.innerText = `$${donor["amount"]}`
    donorDollars.className = `amount`
    const donorType = document.createElement("td")
    donorType.innerText = donor["type"]

    tableRow.append(donorName, donorDollars, donorType)
    table.append(tableRow)
}

function renderTotal(total){
    const universityBottomBackInfo = document.querySelector(".inner-back-bottom-info")
    const totalDiv = document.createElement("div")
    const totalNum = document.createElement("p")
    totalNum.innerText = `$ ${Math.round(total)}`
    totalNum.className = "total-amount"
    totalDiv.append(totalNum)
    universityBottomBackInfo.append(totalDiv)
}