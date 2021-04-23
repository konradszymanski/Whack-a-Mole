const items = document.querySelectorAll('.grid-item');
const startButton = document.getElementById('startBtn');


function gridClick(id) {
    alert(id)
}

const randomItems = () => {
    items.forEach(item => {
        item.classList.remove('moleAlive')
    })
    let randomItems = items[Math.floor(Math.random() * 16)]
    randomItems.classList.add('moleAlive')

}

const move = () => {

    setInterval(randomItems, 1000)
}

startButton.addEventListener('click', move)

// const squares = document.querySelectorAll('.square')
// const mole = document.querySelector('.mole')
// const timeLeft = document.querySelector('#time-left')
// const score = document.querySelector('#score')
// const stop = document.getElementById('stop')
// const slowBtn = document.getElementById('slow')
// const mediumBtn = document.getElementById('medium')
// const fastBtn = document.getElementById('fast')

// let speed = 3000

// let result = 0
// let hitPosition
// let currentTime = 60
// let countDownTimerId

// function randomSquare() {
//     squares.forEach(square => {
//         square.classList.remove('mole')
//     })

//     let randomSquare = squares[Math.floor(Math.random() * 15)]
//     randomSquare.classList.add('mole')

//     hitPosition = randomSquare.id
// }

// squares.forEach(square => {
//     square.addEventListener('mousedown', () => {
//         if (square.id == hitPosition) {
//         result++;
//         score.textContent = result
//         hitPosition = null
//         }
//     })
// })

// function moveMole() {
//     let timerID = null
//     timerId = setInterval(randomSquare, speed)
//     countDownTimerId = setInterval(countDown, 1000)
// }

// function countDown() {
//     currentTime--
//     timeLeft.textContent = currentTime

//     if (currentTime == 0) {
//         clearInterval(countDownTimerId)
//         alert('GAME OVER! Your final score is ' + result)
//     }
//  }

//  function stopBtn() {
//      result = 0
//      currentTime = 60
//      clearInterval(moveMole)
//      alert('GAME STOPPED!')
//      speed = 0
//      clearInterval(countDownTimerId)

//  }

//  stop.addEventListener('click', stopBtn)

//  slowBtn.addEventListener('click', function() {speed = 1500})
//  mediumBtn.addEventListener('click', function() {speed = 1000})
//  fastBtn.addEventListener('click', function() {speed = 500})



// //  function speedSelect() {
// //      if (.clicked == true) {
// //          speed = 200
// //      }

// //      else if (mediumBtn.clicked === true) {
// //         speed = 1000
// //      }

// //      else if (fastBtn.clicked === true){
// //          speed = 500
// //      }
// //  }