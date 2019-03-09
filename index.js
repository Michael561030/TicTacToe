let count = 0;// counter
const allBlocks = document.getElementsByClassName('block'); //all blocks on a field
const whoIsMove = document.getElementById('whoismove'); // info field
const game = document.getElementById('game');// main field

// building field within 9 squares
function buildField() {
    for (let index =0; index<9; index++){
        game.innerHTML += '<div class="block"></div>';
        whoIsMove.innerHTML='X move first';
    }
}
//draw X or O
function drawTicTacToe() {
    buildField();
    for (let index=0; index < allBlocks.length; index++)
        allBlocks[index].onclick = function (event) {
            //checking if item has className 'block' and empty, draw X or O
            if ((event.target.className == 'block') && (event.target.textContent == '')) {
               if (count % 2 == 0 ) {
                   event.target.innerHTML = 'x';
                   whoIsMove.innerHTML='O move next';
               }
               else {
                   event.target.innerHTML = 'o';
                   whoIsMove.innerHTML = 'X move next';
               }
            count++;
            }
            checkWin(allBlocks);
            writeWinner()
            isDraw();
    }
    reset();
}
// reset all fields
function reset(){
    document.getElementById('reset').onclick=function () {
        for (let i=0; i<allBlocks.length; i++){
            allBlocks[i].innerHTML='';
        }
        whoIsMove.innerHTML='X move first'
        count=0;
    }
}
// check all combinations for win
function checkWin(a) {
    if (a[0].textContent === a[1].textContent && a[1].textContent === a[2].textContent) return a[0].textContent;
    if (a[3].textContent === a[4].textContent && a[4].textContent === a[5].textContent) return a[3].textContent;
    if (a[6].textContent === a[7].textContent && a[7].textContent === a[8].textContent) return a[6].textContent;
    if (a[0].textContent === a[3].textContent && a[3].textContent === a[6].textContent) return a[0].textContent;
    if (a[1].textContent === a[4].textContent && a[4].textContent === a[7].textContent) return a[1].textContent;
    if (a[2].textContent === a[5].textContent && a[5].textContent === a[8].textContent) return a[2].textContent;
    if (a[0].textContent === a[4].textContent && a[4].textContent === a[8].textContent) return a[0].textContent;
    if (a[2].textContent === a[4].textContent && a[4].textContent === a[6].textContent) return a[2].textContent;
    else return null
}
//check all conditions for draw
function  isDraw() {
        if (count>8 && checkWin(allBlocks)==null) whoIsMove.innerHTML='Draw';
}
//write who is winner in info field
function writeWinner() {
    if (checkWin(allBlocks)=='x' || checkWin(allBlocks)=='o'){
        whoIsMove.innerHTML= checkWin(allBlocks).toUpperCase()+' won';
    }
    else return null;

}

drawTicTacToe();

// let arrWinCase=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]