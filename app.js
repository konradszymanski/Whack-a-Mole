const squares = document.querySelectorAll('.grid-item')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const stop = document.getElementById('stop')
const slowBtn = document.getElementById('slow')
const mediumBtn = document.getElementById('medium')
const fastBtn = document.getElementById('fast')

let speed = 1500

let result = 0
let hitPosition
let currentTime = 60
let countDownTimerId

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('moleAlive')
    })

    let randomSquare = squares[Math.floor(Math.random() * 16)]
    randomSquare.classList.add('moleAlive')

    hitPosition = randomSquare.id

    console.log(result)
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerID = null
    timerId = setInterval(randomSquare, speed)
    countDownTimerId = setInterval(countDown, 1000);
    document.getElementById('startLayout').style.display = 'none';
    document.querySelector('.layout').style.display = 'grid';

}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

function stopBtn() {
    result = 0
    currentTime = 60
    clearInterval(moveMole)
    speed = 0
    clearInterval(countDown)
    document.getElementById('startLayout').style.display = 'flex';
    document.querySelector('.layout').style.display = 'none';

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