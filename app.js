const gridItems = document.querySelectorAll('.grid-item')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const stopBtn = document.getElementById('stop')
const slowBtn = document.getElementById('slow')
const mediumBtn = document.getElementById('medium')
const fastBtn = document.getElementById('fast')
let score = document.querySelector('#score')

//layout
const startLayout = document.getElementById('startLayout')
const layout = document.querySelector('.layout')
const flexElements = document.querySelector('.flexElements')

// START STOP LAYOUT
const endGameLayout = document.querySelector('#finishLayout')

let speed = 1000
let result = 0
let molePosition
let currentTime = 10
let initialTime = currentTime
let countDownTimerId

//SHOW - HIDE LAYOUT
const showLayout = ()=> {
    startLayout.style.display = 'flex';
    layout.style.display = 'none';
    flexElements.style.display = 'none';
}
const hideLayout = () => {
    startLayout.style.display = 'none';
    layout.style.display = 'grid';
    flexElements.style.display = 'flex';
}
// POSITION AND GRID
const randomSquare = () => {
    gridItems.forEach(square => {
        square.classList.remove('moleAlive')
    })
    let randomSquare = gridItems[Math.floor(Math.random() * 16)]
    randomSquare.classList.add('moleAlive')
    molePosition = randomSquare.id
}

gridItems.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == molePosition) {
            result++;
            score.textContent = result
            molePosition = null
        }
    })
})
// COUNTER 321
let count321go;
let countOnStart = 4
let counter321 = document.getElementById('countDownLayout');

const count321 = () => {
    countOnStart--
    counter321.textContent = countOnStart;
    if (countOnStart == 0) {
        moveMole()
        clearInterval(count321go)
        counter321.style.display = 'none'
    }
}
//TIMER
const countDown = () => {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        endGameLayout.style.display = 'flex'
        document.querySelector('#resuldId').textContent = result;
        currentTime = initialTime
        clearInterval(moveMole)
        clearInterval(countDown)
        clearInterval(timerId)
    }
}

// START STOP GAME
const startGame = () => {
    counter321.style.display = 'block';
    countOnStart = 4;
    timeLeft.textContent = initialTime;
    count321go = setInterval(count321, 1000)
    hideLayout()
}

const moveMole = () => {
    let timerID = null
    timerId = setInterval(randomSquare, speed)
    countDownTimerId = setInterval(countDown, 1000);

}

const stopGame = () => {
   // result = 0
    timeLeft.textContent = 0
    currentTime = 60
    speed = 0
    clearInterval(moveMole)
    clearInterval(countDown)
    showLayout()

}
const tryAgain = () => {
    result = 0
    score.textContent = 0
    endGameLayout.style.display = 'none';
    startLayout.style.display = 'flex';
}

stopBtn.addEventListener('click', stopGame)

slowBtn.addEventListener('click', function () {
    speed = 1500;

})
mediumBtn.addEventListener('click', function () {
    speed = 1000

})
fastBtn.addEventListener('click', function () {
    speed = 500

})

function gridClick(id) {
    console.log(id)
}
