window.onload = function(){
    displayBingoBoard()
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