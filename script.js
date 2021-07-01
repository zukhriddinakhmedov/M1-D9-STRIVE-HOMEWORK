window.onload = function(){
    displayBingoBoard()
   const btn = document.getElementById('btn-random')
   btn.addEventListener('click', function () {
       const random = Math.floor(Math.random()*76)
       const cells = document.querySelectorAll('.number')
       cells[random-1].style.color="red"
       console.log(random, cells)
   })
}

const displayBingoBoard = function(){
    let bingoBoardNode = document.getElementById("bingo-board")
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++){
        let newNumberNode = document.createElement("div")
        newNumberNode.innerText = bingoNumber
        newNumberNode.classList.add("number")
        bingoBoardNode.appendChild(newNumberNode)
       
    }
}
