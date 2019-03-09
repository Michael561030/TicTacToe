let count = 0;
let allblocks = document.getElementsByClassName('block');
let whoIsMove = document.getElementById('whoismove')

// building field within 9 squares
function buildField() {
    for (let index =0; index<9; index++){
        document.getElementById('game').innerHTML += '<div class="block"></div>'
        document.getElementById('whoismove').innerHTML='X move first'
    }
    document.getElementById('game').innerHTML += '<canvas id="canvas"></canvas>'
}

//draw X or O
function drawTicTacToe() {
    buildField()
    document.getElementById('game').onclick = function (event) {
        //checking if item has className 'block' and empty, draw X or O
        if ((event.target.className == 'block') && (event.target.textContent == '')) {
           if (count % 2 == 0) {
               event.target.innerHTML = 'x';
               document.getElementById('whoismove').innerHTML='O move next';
           }
           else{
               event.target.innerHTML = 'o';
               document.getElementById('whoismove').innerHTML='X move next';
           }
            count++;

        }
        checkWin()
        reset()
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

function checkWin() {


    let a = allblocks;

    if (a[0].textContent == 'x' && a[1].textContent == 'x' && a[2].textContent == 'x') {
        whoIsMove.innerHTML = 'X won';
        var draw = SVG('drawing').size(300, 130)
        var line = draw.line(0, 100, 100, 0).move(20, 20)
        line.stroke({ color: '#f06', width: 10, linecap: 'round' })
        // var context = document.getElementById('canvas');
        // var ctx = canvas.getContext("2d");
        // ctx.moveTo(0,-200);
        // ctx.lineTo(300,50);
        // ctx.lineWidth='5';
        // ctx.stroke();
    }
    if (a[3].textContent == 'x' && a[4].textContent == 'x' && a[5].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[6].textContent == 'x' && a[7].textContent == 'x' && a[8].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[0].textContent == 'x' && a[3].textContent == 'x' && a[6].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[1].textContent == 'x' && a[4].textContent == 'x' && a[7].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[2].textContent == 'x' && a[5].textContent == 'x' && a[8].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[0].textContent == 'x' && a[4].textContent == 'x' && a[8].textContent == 'x') whoIsMove.innerHTML = 'X won';
    if (a[2].textContent == 'x' && a[4].textContent == 'x' && a[6].textContent == 'x') whoIsMove.innerHTML = 'X won';

    if (a[0].textContent == 'o' && a[1].textContent == 'o' && a[2].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[3].textContent == 'o' && a[4].textContent == 'o' && a[5].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[6].textContent == 'o' && a[7].textContent == 'o' && a[8].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[0].textContent == 'o' && a[3].textContent == 'o' && a[6].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[1].textContent == 'o' && a[4].textContent == 'o' && a[7].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[2].textContent == 'o' && a[5].textContent == 'o' && a[8].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[0].textContent == 'o' && a[4].textContent == 'o' && a[8].textContent == 'o') whoIsMove.innerHTML = 'O won';
    if (a[2].textContent == 'o' && a[4].textContent == 'o' && a[6].textContent == 'o') whoIsMove.innerHTML = 'O won';



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