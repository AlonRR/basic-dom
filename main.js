
const playingField = document.getElementById("playing-field")
console.log(document)
document.getElementById("block").style.backgroundcolor = "yellow"
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "black"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
// console.log(document)
header.setAttribute("class", "my-header")
const subHeader = document.createElement(`h2`)
subHeader.innerHTML = `This is some Blue text`
subHeader.setAttribute(`class`, `subHeader`)
document.body.appendChild(subHeader)
const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const clickColor = function() {
    box.style.backgroundColor = `#8e44ad`
}

const moveRight = function(){
let count = parseInt(document.getElementById(`block`).style.left) || 0
    document.getElementById(`block`).style.left = `${count +40}px`
  }
const moveLeft = function(){
let count = parseInt(document.getElementById(`block`).style.right) || 0
    document.getElementById(`block`).style.right = `${count +40}px`
  }
const moveDown = function(){
let count = parseInt(document.getElementById(`block`).style.top) || 0
    document.getElementById(`block`).style.top = `${count +40}px`
  }
const moveUp = function(){
let count = parseInt(document.getElementById(`block`).style.bottom) || 0
    document.getElementById(`block`).style.bottom = `${count +40}px`
  }
  
