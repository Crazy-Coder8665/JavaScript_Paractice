const X_Class='x';
const Circle_Class='circle';
const Winning_Combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElement = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');
const winningMessage = document.querySelector('.winning-message');
const winningMessageText= document.querySelector('[data-winning-message-text]')
let circleTurn;

startGame();
restartButton.addEventListener('click',startGame);
function startGame(){
    circleTurn=false;
    cellElement.forEach(cell => {
        cell.classList.remove(X_Class);
        cell.classList.remove(Circle_Class);
        cell.removeEventListener('clcik',handleClick);
        cell.addEventListener('click',handleClick,{ once:true})
    })
    setBoardHoverClass();
    winningMessage.classList.remove('show');
}

function handleClick(e){
    const cell =e.target
    const currentClass = circleTurn? Circle_Class:X_Class;
    placeMark(cell, currentClass);
    if(checkWin(currentClass)){
        endGame(false);
    }else if(isDraw()){
        endGame(true);
    }else{
    
    swapTurns();
    setBoardHoverClass();
}
}
function endGame(draw){
if(draw){
    winningMessageText.innerText='Draw!';
}else{
    winningMessageText.innerText =`${circleTurn?"O's":"X's"} Wins!`
}
    winningMessage.classList.add('show');
}

function isDraw(){
    return [...cellElement].every(cell=>{
        return cell.classList.contains(X_Class)||cell.classList.contains(Circle_Class);
    })
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}
function swapTurns(){
    circleTurn = !circleTurn;
}
function setBoardHoverClass(){
    board.classList.remove(X_Class);
    board.classList.remove(Circle_Class);
    if (circleTurn){
        board.classList.add(Circle_Class)
    }else{
        board.classList.add(X_Class)
    }
}
function checkWin(currentClass){
    return Winning_Combinations.some(combinations =>{
        return combinations.every(index=>{
            return cellElement[index].classList.contains(currentClass)
        })
    })
}