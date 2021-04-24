const gridItems = document.querySelectorAll('.grid-item')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const stop = document.getElementById('stop')
const slowBtn = document.getElementById('slow')
const mediumBtn = document.getElementById('medium')
const fastBtn = document.getElementById('fast')

// START STOP LAYOUT
const endGameLayout = document.querySelector('#finishLayout')



let speed = 1000
let result = 0
let molePosition
let currentTime = 5
let countDownTimerId

// POSITION AND GRID
function randomSquare() {
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

function count321() {
    countOnStart--
    counter321.textContent = countOnStart
    if (countOnStart == 0) {
        moveMole()
        clearInterval(count321go)
        counter321.style.display = 'none'
    }
}
//TIMER
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        endGameLayout.style.display = 'flex'
        // alert('Final score:' + result)
        document.querySelector('#resuldId').textContent = result;

        clearInterval(moveMole)
        clearInterval(countDown)
        clearInterval(timerId)
    }

}
// START STOP GAME
function startGame() {
    count321go = setInterval(count321, 1000)
    document.getElementById('startLayout').style.display = 'none';
    document.querySelector('.layout').style.display = 'grid';
    document.querySelector('.flexElements').style.display = 'flex';
}

function moveMole() {
    let timerID = null
    timerId = setInterval(randomSquare, speed)
    countDownTimerId = setInterval(countDown, 1000);


}

function stopBtn() {
    result = 0
    timeLeft.textContent = 0
    currentTime = 60
    speed = 0
    clearInterval(moveMole)
    clearInterval(countDown)
    document.getElementById('startLayout').style.display = 'flex';
    document.querySelector('.layout').style.display = 'none';
    document.querySelector('.flexElements').style.display = 'none';

}
const tryAgain = () => {
    endGameLayout.style.display = 'none';
    document.getElementById('startLayout').style.display = 'flex';
}

stop.addEventListener('click', stopBtn)

slowBtn.addEventListener('click', function () {
    speed = 1500

})
mediumBtn.addEventListener('click', function () {
    speed = 1000

})
fastBtn.addEventListener('click', function () {
    speed = 500

})




// const items = document.querySelectorAll('.grid-item');
// const startButton = document.getElementById('startBtn');


function gridClick(id) {
    console.log(id)
}

// const randomItems = () => {
//     items.forEach(item => {
//         item.classList.remove('moleAlive')
//     })
//     let randomItems = items[Math.floor(Math.random() * 16)]
//     randomItems.classList.add('moleAlive')

// }

// const move = () => {

//     setInterval(randomItems, 1000)
// }

// startButton.addEventListener('click', move)