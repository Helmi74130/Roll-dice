let button = document.getElementById('bouton')
let hold = document.getElementById('hold')
let total1 = document.getElementById('total1')
let total2 = document.getElementById('total2')
let tour = document.getElementById('tour')
let newGame = document.getElementById('newGame')
let online = document.getElementById('online')
let online2 = document.getElementById('online2')
let inputPlayer1 = document.getElementById('inputPlayer1')
let inputPlayer2 = document.getElementById('inputPlayer2')
let buzzer = document.getElementById('buzzer')
let holdMp3 = document.getElementById('holdMp3')
let play = document.getElementById('play')
let rules = document.getElementById('rules')
let modalRules = document.getElementById('modalRules')
let closeBtn2 = document.getElementById('closeBtn2')
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let modal = document.getElementById('simpleModal');
let sound = document.getElementById('sound')
let winner = document.getElementById('winner')
let modalWin = document.getElementById('modalWin')
let buttonModalWin = document.getElementById('buttonModalWin')
let apllaudissement = document.getElementById('apllaudissement')

//SET RANDOM NUMBERS
function getRandomInt(max) {
	return Math.ceil(Math.random() * max);
}

class Player {
	constructor(name, actif, roundPoints, globalPoints) {
		this.name = name
		this.actif = actif
		this.roundPoints = 0
		this.globalPoints = 0
	}
}

let player1 = new Player('joueur1', true)
let player2 = new Player('Joueur2', false)

//ajoute points du dés et supprime points si 1
function addPointPlayer() {
	aleatoire = getRandomInt(6)
	setTimeout(() => {
		if (player1.actif)
			if (aleatoire === 1) {
				buzzer.play()
				player1.roundPoints = 0
				totalCurrent1.innerText = player1.roundPoints
				player1.actif = false
				player2.actif = true
				online.style.display = "none"
				online2.style.display = "block"
			} else {
				player1.roundPoints += aleatoire
				totalCurrent1.innerText = player1.roundPoints
			}
		else {
			if (aleatoire === 1) {
				buzzer.play()
				player2.roundPoints = 0
				totalCurrent2.innerText = player2.roundPoints
				player1.actif = true
				player2.actif = false
				online2.style.display = "none"
				online.style.display = "block"
			} else {
				player2.roundPoints += aleatoire
				totalCurrent2.innerText = player2.roundPoints
			}
		}
	}, 1200);
}
// SET IDENTITY AND SCORE PLAYERS
function sayIdentite() {
	total1.innerText = player1.globalPoints
	totalCurrent1.innerText = player1.roundPoints
	total2.innerText = player2.globalPoints
	totalCurrent2.innerText = player2.roundPoints
}
// CHANGE POINT IN GLOBAL POINT AND TOGLE PLAYER
function addPointTOGlobalPoint() {
	if (player1.actif) {
		player1.globalPoints += player1.roundPoints
		player1.roundPoints = 0
		player1.actif = false
	} else {
		player2.globalPoints += player2.roundPoints
		player2.roundPoints = 0
		player1.actif = true
	}
}
// CHECKED PLAYERS POINTS AFTER HOLDING
function verif() {
	if (player1.globalPoints >= 100) {
		openmodalWin()
		sayWinnerName1()
		apllaudissement.play()
		reset()
	}

	if (player2.globalPoints >= 100) {
		openmodalWin()
		sayWinnerName2()
		apllaudissement.play()
		reset()
	}
}
// RESET THE GAME
function reset() {
	player1.globalPoints = 0
	player1.roundPoints = 0
	player2.roundPoints = 0
	player2.globalPoints = 0
	player1.actif = true
	sayIdentite()
}
// REMOVE PLAYER  
function removeOnline() {
	if (player1.actif === false) {
		online.style.display = "none"
		online2.style.display = "block"
	} else {
		online2.style.display = "none"
		online.style.display = "block"
	}
}
// SET DICE INITIAL POSITION
function position() {
	cube.rotation.x = -0.6
	cube.rotation.y = 0
}
/* SET TIME AFTER CLICK */
function debounce(callback, delay) {
	let timer
	return function() {
		const args = arguments
		const context = this
		clearTimeout(timer)
		timer = setTimeout(function() {
			callback.apply(context, args)
		}, delay)
	}
}
// INSERT PLAYER NAME
function insertName() {
	namePlayer1.innerText = inputPlayer1.value
	namePlayer2.innerText = inputPlayer2.value
}
// OPEN MODAL
function openModal() {
	modal.style.display = 'block';
}

function openModal2() {
	modalRules.style.display = 'block'
}

function openmodalWin() {
	modalWin.style.display = 'block'
}
// CLOSE MODAL
function closeModal() {
	modal.style.display = 'none';
}

function closeModal2() {
	modalRules.style.display = 'none'
}

function closeModalWin() {
	modalWin.style.display = 'none'
}

// Click outside and close
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

function outsideClick2(e) {
	if (e.target == modalRules) {
		modalRules.style.display = 'none';
	}
}

function outsideClickModalWin(e) {
	if (e.target == modalWin) {
		modalWin.style.display = 'none';
	}
}
// Listen button new-game
newGame.addEventListener('click', () => {
	reset()
	removeOnline()
})
// Listen button Roll dice
button.addEventListener('click', debounce(function(e) {
	addPointPlayer()
	sayIdentite()
	removeOnline()
	position()
	jeux()
	verif()
	sound.play()
}, 1000))
// modal new game
play.addEventListener('click', () => {
	insertName()
	closeModal()
})
// Listen button Hold
hold.addEventListener('click', () => {
	holdMp3.play()
	addPointTOGlobalPoint()
	verif()
	sayIdentite()
	removeOnline()
})

buttonModalWin.addEventListener('click', closeModalWin)
// Listen for open click
newGame.addEventListener('click', openModal);

rules.addEventListener('click', openModal2)
// Listen for close click
closeBtn.addEventListener('click', closeModal);

closeBtn2.addEventListener('click', closeModal2)
// Listen for outside click
window.addEventListener('click', outsideClick);

window.addEventListener('click', outsideClick2);

function sayWinnerName1() {
	winner.innerText = namePlayer1.innerText
}

function sayWinnerName2() {
	winner.innerText = namePlayer2.innerText
}


let french = document.getElementById('french')
let textLanguageEn = document.getElementsByClassName('textLanguageEn')
let textLanguageFr = document.getElementsByClassName('textLanguageFr')
let english = document.getElementById('english')

/* test */
french.addEventListener('click', () => {
	for (let i = 0; i < textLanguageEn.length; i++) {
		textLanguageEn[i].style.display = 'none';
		textLanguageFr[i].style.display = 'block';
	}

})

english.addEventListener('click', () => {
	for (let i = 0; i < textLanguageEn.length; i++) {
		textLanguageEn[i].style.display = 'block';
		textLanguageFr[i].style.display = 'none';
	}
})