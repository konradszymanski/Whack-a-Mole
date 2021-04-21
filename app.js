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
    setInterval(randomItems, 100)
}

startButton.addEventListener('onclick', move())