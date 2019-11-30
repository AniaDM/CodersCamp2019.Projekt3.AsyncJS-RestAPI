var buttonPeople = document.getElementById("people").addEventListener("click", choosingGameMode)
var buttonVehicles = document.getElementById("vehicles").addEventListener("click", choosingGameMode)
var buttonSpaceships = document.getElementById("spaceships").addEventListener("click", choosingGameMode)

function choosingGameMode(e) {
    e.target.style.color = "black"
    return e.target.innerHTML
}