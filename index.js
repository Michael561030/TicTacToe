let count = 0;
let allblocks = document.getElementsByClassName('block');
let whoIsMove = document.getElementById('whoismove')

// building field within 9 squares
function buildField() {
    for (let index =0; index<9; index++){
        document.getElementById('game').innerHTML += '<div class="block"></div>'
        document.getElementById('whoismove').innerHTML='X move first'
    }
}

//draw X or O
function drawTicTacToe() {
    buildField()
    document.getElementById('game').onclick = function (event) {
        //checking if item has className 'block' and empty, draw X or O
        if ((event.target.className == 'block') && (event.target.textContent == '')) {
           if (count % 2 == 0) {
               event.target.innerHTML = 'x';
               whoIsMove.innerHTML='O move next';
           }
           else {
               event.target.innerHTML = 'o';
               whoIsMove.innerHTML = 'X move next';
           }

        count++;

        }

        checkWin()
        reset()
        isDraw()
    }
}
// reset all fields
function reset(){
    document.getElementById('reset').onclick=function () {
        for (let i=0; i<allblocks.length; i++){
            allblocks[i].innerHTML='';
        }
        document.getElementById('whoismove').innerHTML='X move first'
        count=0;
    }
}
// check all combinations for win
function checkWin() {


    let a = allblocks;
    if (a[0].textContent == 'x' && a[1].textContent == 'x' && a[2].textContent == 'x') return whoIsMove.innerHTML = 'X won'
    if (a[3].textContent == 'x' && a[4].textContent == 'x' && a[5].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[6].textContent == 'x' && a[7].textContent == 'x' && a[8].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[0].textContent == 'x' && a[3].textContent == 'x' && a[6].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[1].textContent == 'x' && a[4].textContent == 'x' && a[7].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[2].textContent == 'x' && a[5].textContent == 'x' && a[8].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[0].textContent == 'x' && a[4].textContent == 'x' && a[8].textContent == 'x') return whoIsMove.innerHTML = 'X won';
    if (a[2].textContent == 'x' && a[4].textContent == 'x' && a[6].textContent == 'x') return whoIsMove.innerHTML = 'X won';

    if (a[0].textContent == 'o' && a[1].textContent == 'o' && a[2].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[3].textContent == 'o' && a[4].textContent == 'o' && a[5].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[6].textContent == 'o' && a[7].textContent == 'o' && a[8].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[0].textContent == 'o' && a[3].textContent == 'o' && a[6].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[1].textContent == 'o' && a[4].textContent == 'o' && a[7].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[2].textContent == 'o' && a[5].textContent == 'o' && a[8].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[0].textContent == 'o' && a[4].textContent == 'o' && a[8].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    if (a[2].textContent == 'o' && a[4].textContent == 'o' && a[6].textContent == 'o') return whoIsMove.innerHTML = 'O won';
    else return null


}
//check all conditions for draw
function  isDraw() {
    let countX = 0;
    let countO = 0;
    for (let i=0; i<allblocks.length; i++){
        if (allblocks[i].textContent == 'x'){
            countX++
        }
        if (allblocks[i].textContent == 'o'){
            countO++
        }
        if ((countX==5) & (countO==4) & (checkWin() != null)) whoIsMove.innerHTML='Draw'



    }
}

drawTicTacToe()


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