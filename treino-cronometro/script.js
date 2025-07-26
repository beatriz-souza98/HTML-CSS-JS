let number = 0
let cron
let h1 = document.querySelector("h1")

function start(){
  cron = setInterval( function () {
number++
h1.innerHTML = number}, 1000)
}

function stop(){clearInterval(cron)
} 

function reset(){
  clearInterval(cron)
  h1.innerHTML = 0
  number = 0
}