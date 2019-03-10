let count = 0;// counter
const allBlocks = document.getElementsByClassName('block'); //all blocks on a field
const whoIsMove = document.getElementById('whoismove'); // info field
const game = document.getElementById('game');// main field
const line = document.getElementsByClassName('line');
const collectionOfWin = {
    '0-2': 'firstHorizontalLine',
    '3-5': 'secondHorizontalLine',
    '6-8': 'thirdHorizontalLine',
    '0-6': 'firstVerticalLine',
    '1-7': 'secondVerticalLine',
    '2-8': 'thirdVerticalLine',
    '0-8': 'firstDiagonalLine',
    '2-6': 'secondDiagonalLine'
}

// building field within 9 squares
function buildField() {
    for (let index =0; index<9; index++){
        game.innerHTML += '<div class="block"></div>';
    }
    whoIsMove.innerHTML='X move first';
}



// reset all fields
function reset(){
    document.getElementById('reset').onclick=function () {
        //reset blocks
        for (let i=0; i<allBlocks.length; i++){
            allBlocks[i].innerHTML='';
        }
        //reset lines
        for (let i=0; i<line.length; i++){
            line[i].style.display='none';
        }
        //info fields who moves first
        whoIsMove.innerHTML='X move first';
        count=0;
    }
}
// check all combinations for win
function checkWin(a) {
    if ((a[0].textContent === a[1].textContent && a[1].textContent === a[2].textContent) && a[0].textContent != '') {
        return {content: a[0].textContent,
            lineOfwinner:'0-2'};
    }
    if ((a[3].textContent === a[4].textContent && a[4].textContent === a[5].textContent) && a[3].textContent != ''){
        return {content: a[3].textContent,
                lineOfwinner:'3-5'};
    }
    if ((a[6].textContent === a[7].textContent && a[7].textContent === a[8].textContent) && a[6].textContent != '') {
        return {content: a[6].textContent,
            lineOfwinner:'6-8'};
    };
    if ((a[0].textContent === a[3].textContent && a[3].textContent === a[6].textContent)  && a[0].textContent != '') {
        return {content: a[0].textContent,
            lineOfwinner:'0-6'};
    };
    if ((a[1].textContent === a[4].textContent && a[4].textContent === a[7].textContent)  && a[1].textContent != '') {
        return {content: a[1].textContent,
            lineOfwinner:'1-7'};
    }
    if ((a[2].textContent === a[5].textContent && a[5].textContent === a[8].textContent)  && a[2].textContent != '') {
        return {content: a[2].textContent,
            lineOfwinner:'2-8'};
    }
    if ((a[0].textContent === a[4].textContent && a[4].textContent === a[8].textContent)  && a[0].textContent != ''){
        return {content: a[0].textContent,
            lineOfwinner:'0-8'};
    }
    if ((a[2].textContent === a[4].textContent && a[4].textContent === a[6].textContent)  && a[2].textContent != '') {
        return {content: a[2].textContent,
            lineOfwinner:'2-6'};
    }
    else {
        return {content: null,
             lineOfwinner: null};
     }
    }
//check all conditions for draw
function  isDraw() {
        if (count>8 && checkWin(allBlocks).content==null) whoIsMove.innerHTML='Draw';
}
//write who is winner in info field
function writeWinner() {
    if (checkWin(allBlocks).content=='x' || checkWin(allBlocks).content=='o'){
        return whoIsMove.innerHTML= checkWin(allBlocks).content.toUpperCase()+' won';
    }
    if (!checkWin(allBlocks)) return;
}
//drawing win line on the field
function drawWinLine(){
    let b = checkWin(allBlocks).lineOfwinner
    for (key in collectionOfWin){
       if( b === key)
           document.getElementById(collectionOfWin[key]).style.display='block'
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
            drawWinLine()
            isDraw();
        }
    reset();
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