let count = 0;// counter
const allBlocks = document.getElementsByClassName('block'); //all blocks on a field
const whoMoves = document.getElementById('whomoves'); // info field
const game = document.getElementById('game');// main field
const line = document.getElementsByClassName('line');
const collectionOfWin = {
    0: 'firstHorizontalLine',
    1: 'secondHorizontalLine',
    2: 'thirdHorizontalLine',
    3: 'fourthHorizontalLine',
    4: 'fifthHorizontalLine',
    5: 'firstVerticalLine',
    6: 'secondVerticalLine',
    7: 'thirdVerticalLine',
    8: 'fourthVerticalLine',
    9: 'fifthVerticalLine',
    10: 'firstDiagonalLine',
    11: 'secondDiagonalLine'
};
// building field within 9 squares
function buildField() {
    for (let index =0; index<25; index++){
        game.innerHTML += '<div class="block"></div>';
    }
    whoMoves.innerHTML='X moves first';
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
        whoMoves.innerHTML='X moves first';
        count=0;
    }
}
function isX(n) {
    return n === 'x';
}
function isO(n) {
    return n === 'o';
}
//checking winner in vertical lines
function checkWinVertical(firstIndex,lastIndex,array) {
    let arrayOfValues=[];
    while(lastIndex<=24){
        let inArray=[];
        for (let index=firstIndex; index<=lastIndex; index+=5){
            inArray.push(array[index].innerHTML);
        }
        firstIndex++;
        lastIndex++;
        arrayOfValues.push(inArray);
    }
    return arrayOfValues
}

//checking winner in horizontal lines
function checkWinHorizontal(firstIndex,lastIndex,array) {
    let arrayOfValues=[];
    while(firstIndex<=20){
        let inArray=[];
        for (let index=firstIndex; index<=lastIndex; index++){
            inArray.push(array[index].innerHTML);

        }
    firstIndex+=5;
    lastIndex+=5;
    arrayOfValues.push(inArray);
    }
    return arrayOfValues;
}

//write who is winner in info field
function writeWinner(array) {
    let length = array.length;
    try{
        for (let i=0; i<=length; i++){
            for (let j=0; j<array[i].length; j++ ){
                if ((array[i].every(isX) && array[i].length===5)||((array[i].every(isO) && array[i].length===5))){
                    return whoMoves.innerHTML = array[i][j].toUpperCase() + ' has won';
                }
            }
        }
        if (!array) return;
    }
    catch(TypeError){}

}

//when nobody win
function  isDraw() {
    if (count>24) whoMoves.innerHTML='Draw';

}
//drawing win line on the field
function drawWinLine(){
    // draw horizontal lines
    try {
        let winnerLine = checkWinHorizontal(0,4,allBlocks);
        let length =checkWinHorizontal(0,4,allBlocks).length ;
        for (let i=0; i<=length; i++){
            for (let j=0; j<winnerLine[i].length; j++ ){
                if ((winnerLine[i].every(isX) && winnerLine[i].length===5)||((winnerLine[i].every(isO) && winnerLine[i].length===5))){
                    for (let key in collectionOfWin){
                            if( winnerLine.indexOf(winnerLine[i]) == key){
                                document.getElementById(collectionOfWin[key]).style.display='block';
                        }
                    }

                }
            }
        }

    }
    catch(TypeError) {'something went wrong'}
    //draw vertical lines
    try {
        let winnerLine = checkWinVertical(0,20,allBlocks);
        let length =checkWinVertical(0,20,allBlocks).length ;
        for (let i=0; i<=length; i++){
            for (let j=0; j<winnerLine[i].length; j++ ){
                if ((winnerLine[i].every(isX) && winnerLine[i].length===5)||((winnerLine[i].every(isO) && winnerLine[i].length===5))){
                    for (let key in collectionOfWin){
                        if( (winnerLine.indexOf(winnerLine[i])+5) == key){
                            document.getElementById(collectionOfWin[key]).style.display='block';
                        }
                    }

                }
            }
        }

    }
    catch(TypeError) {'something went wrong'}

}
//draw X or O
function drawTicTacToe() {
    buildField();
    for (let index=0; index < allBlocks.length; index++){
        allBlocks[index].onclick = function (event) {
            if (whoMoves.innerHTML === 'X has won' || whoMoves.innerHTML === 'O has won'){
                return;
            }
            //checking if item has className 'block' and empty, draw X or O
            if ((event.target.className === 'block') && (event.target.textContent === '')) {
                if (count % 2 == 0 ) {
                    event.target.innerHTML = 'x';
                    whoMoves.innerHTML='O moves next';
                }
                else {
                    event.target.innerHTML = 'o';
                    whoMoves.innerHTML = 'X moves next';
                }
                count++;
            }
            checkWinHorizontal(0,4,allBlocks);
            checkWinVertical(0,20,allBlocks);
            writeWinner(checkWinHorizontal(0,4,allBlocks));
            writeWinner(checkWinVertical(0,20,allBlocks));
            drawWinLine();
            isDraw();
        }
    }
    reset();
}
drawTicTacToe();




