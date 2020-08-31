let counter = document.querySelector("#counter")
let number = parseInt(counter.innerText,10)
let minus = document.querySelector

function autoCount() {
    number = number + 1
    counter.innerText = `${number}`
}

var timer = setInterval( () => autoCount(), 1000)

