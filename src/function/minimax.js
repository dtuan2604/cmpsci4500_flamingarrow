function cleanupBoard(arr, arrsize){
    for (var i =0 ; i < arrsize; i++){
        for (var j =0 ; j < arrsize; j++){
            if (arr[i][j] == 4){
                arr[i][j] = 0;
            }
            if (arr[i][j] == 5){
                arr[i][j] = 0;
            }
        }
    }
}

function checklose(array1,size1,player1){
    arr = array1;
    var player = player1;
    var size = size1;
    for(var row = 0;row < size; row ++)
    {
        for (var colunm = 0; colunm < size; colunm++)
        {
            if(arr[row][colunm] == player)
            {
                if(row > 0)
                {
                    if(arr[row - 1][colunm] == 0)
                        return false;
                }
                if(row < size -1)
                {
                    if(arr[row + 1][colunm]== 0)
                        return false;
                }
                if(colunm > 0)
                {
                    if(arr[row][colunm - 1] == 0)
                        return false;
                }
                if(colunm < size -1)
                {
                    if(arr[row][colunm + 1] == 0)
                        return false;
                }
                if(colunm > 0 && row > 0)
                {
                    if(arr[row - 1][colunm - 1] == 0)
                        return false;
                }
                if(colunm < size - 1 && row < size - 1)
                {
                    if(arr[row + 1][colunm + 1] == 0)
                        return false;
                }
                if(colunm < size - 1 && row > 0)
                {
                    if(arr[row - 1][colunm + 1] == 0)
                        return false;
                }
                if(colunm > 0 && row < size - 1)
                {
                    if(arr[row + 1][colunm - 1] == 0)
                        return false;
                }
            }

        }
    }
    return true;
}

function countPossibleMoves(arr,x,y,object, size) {
    //arr is the 2d array of the game , x is the row of the game , y is the column of the game
    //display all possible option on right
    var row = x;
    var column = y+1;
    var countPossibleMove = 0;
    while (column < size)
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        column++;//go right unitl out of boundary
    }

    row = x;
    column = y-1;
    //display all possible option on left
    while(column >= 0 )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        column--;//go left unitl out of boundary
    }


    row = x-1;
    column = y;
    //display all possible option on upside
    while(row >= 0 )
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row--;//go down unitl out of boundary
    }

    row = x+1;
    column = y;
    //display all possible option on downside
    while(row < size )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row++;//go up unitl out of boundary
    }
    row = x-1;
    column = y+1;
    //display all possible option on right up side
    while(row >= 0 && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row--;
        column++;
        //go up unitl out of boundary
    }
    row = x+1;
    column = y-1;
    //display all possible option on left down side
    while(row < size && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row++;
        column--;
        //go up unitl out of boundary
    }

    //display all possible option on left up side
    row = x-1;
    column = y-1;
    while(row >= 0 && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row--;
        column--;
        //go up unitl out of boundary
    }

    row = x+1;
    column = y+1;
    //display all possible option on right down side
    while(row < size && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        countPossibleMove++;

        row++;
        column++;
        //go up unitl out of boundary
    }

    return countPossibleMove;
}




//this is how a print the array 155-161
function displayPossibleMoveToMove(arr,x,y,object, size, bestMove) {
    //arr is the 2d array of the game , x is the row of the game , y is the column of the game
    //display all possible option on right
    var row = x;
    var column = y+1;
    var fixRowMove = x;
    var fixColMove = y;

    while (column < size)
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;
        column++;//go right unitl out of boundary
    }

    row = x;
    column = y-1;
    //display all possible option on left
    while(column >= 0 )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        column--;//go left unitl out of boundary
    }


    row = x-1;
    column = y;
    //display all possible option on upside
    while(row >= 0 )
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row--;//go down unitl out of boundary
    }

    row = x+1;
    column = y;
    //display all possible option on downside
    while(row < size )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row++;//go up unitl out of boundary
    }
    row = x-1;
    column = y+1;
    //display all possible option on right up side
    while(row >= 0 && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row--;
        column++;
        //go up unitl out of boundary
    }
    row = x+1;
    column = y-1;
    //display all possible option on left down side
    while(row < size && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row++;
        column--;
        //go up unitl out of boundary
    }

    //display all possible option on left up side
    row = x-1;
    column = y-1;
    while(row >= 0 && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row--;
        column--;
        //go up unitl out of boundary
    }

    row = x+1;
    column = y+1;
    //display all possible option on right down side
    while(row < size && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 2;
        displayPossibleMoveToShoot(arr,row,column, fixRowMove, fixColMove,object, size, bestMove);
        arr[row][column] = 0;

        row++;
        column++;
        //go up unitl out of boundary
    }
    return arr;
}


function displayPossibleMoveToShoot(arr,x,y, oldX, oldY, object, size, bestMove) {
    //arr is the 2d array of the game , x is the row of the game , y is the column of the game
    //display all possible option on right
    let fixRow = x;
    let fixCol = y;
    var row = x;
    var column = y+1;

    while (column < size)
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;
        column++;//go right unitl out of boundary
    }

    row = x;
    column = y-1;
    //display all possible option on left
    while(column >= 0 )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        column--;//go left unitl out of boundary
    }


    row = x-1;
    column = y;
    //display all possible option on upside
    while(row >= 0 )
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row--;//go down unitl out of boundary
    }

    row = x+1;
    column = y;
    //display all possible option on downside
    while(row < size )
    {
        //if the option is not avaliable, break
        if (arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row++;//go up unitl out of boundary
    }
    row = x-1;
    column = y+1;
    //display all possible option on right up side
    while(row >= 0 && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row--;
        column++;
        //go up unitl out of boundary
    }
    row = x+1;
    column = y-1;
    //display all possible option on left down side
    while(row < size && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row++;
        column--;
        //go up unitl out of boundary
    }

    //display all possible option on left up side
    row = x-1;
    column = y-1;
    while(row >= 0 && column >= 0)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row--;
        column--;
        //go up unitl out of boundary
    }

    row = x+1;
    column = y+1;
    //display all possible option on right down side
    while(row < size && column < size)
    {
        //if the option is not avaliable, break
        if(arr[row][column] != 0)
        {
            break;
        }
        //4 means this option is avaliable
        arr[row][column] = 3;
        if (checklose(arr, size, 1)){
            bestMove.score = 1000;
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        if (bestMove.score < evaluate(arr, size)){
            bestMove.score = evaluate(arr, size);
            bestMove.rowShoot = row;
            bestMove.colShoot = column;
            bestMove.rowMove = fixRow;
            bestMove.colMove = fixCol;
            bestMove.originRow = oldX;
            bestMove.originCol = oldY;
        }
        arr[row][column] = 0;

        row++;
        column++;
        //go up unitl out of boundary
    }
    return arr;
}


//Test case
var arrsize = 7
var arr = [
    [0,0,0,0,0,0,0],
    [0,0,0,2,2,2,0],
    [0,2,0,1,1,1,0],
    [0,0,0,3,2,3,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0]]

arr2 = countPossibleMoves(arr,2,1,4,arrsize);
console.log(arr2)
function evaluate(arr, arrsize) {
    var countPlayer1 = 0;
    var countPlayer2 = 0
    for (var i =0 ; i < arrsize; i++){
        for (var j =0 ; j < arrsize; j++){
            if (arr[i][j] == 1){
                countPlayer1 += countPossibleMoves(arr, i,j, 4, arrsize);
            }
            if (arr[i][j] == 2){
                countPlayer2 += countPossibleMoves(arr, i,j, 4, arrsize);
            }
        }
    }
    //for debug
    // console.log('countPlayer2 - countPlayer1: ', countPlayer2-countPlayer1)
    return countPlayer2 - countPlayer1;
}
console.log(evaluate(arr,arrsize))

class HiMove {
    constructor(){
        let rowMove, colMove, rowShoot, colShoot, score, originRow, originCol;
    }
}

function findBestMove(arr, arrsize){
    var bestMove = new HiMove();
    bestMove.rowMove = 0;
    bestMove.colMove = 2;
    bestMove.rowShoot = 3;
    bestMove.colShoot = 5;
    bestMove.originRow = 2;
    bestMove.originCol = 2;
    bestMove.score = -1000;
    // console.log(bestMove.rowMove);
    // console.log(bestMove.colMove);
    // console.log(bestMove.colShoot);
    // console.log(bestMove.rowShoot);
    // console.log(bestMove.score)
    for (var i =0 ; i < arrsize; i++){
        for (var j =0 ; j < arrsize; j++){
            if (arr[i][j] == 2){
                arr[i][j] = 0;
                displayPossibleMoveToMove(arr, i, j, 4, arrsize, bestMove);
                arr[i][j] = 2;
            }
        }
    }
    console.log('Best Move');
    console.log(bestMove.originRow);
    console.log(bestMove.originCol);
    console.log(bestMove.rowMove);
    console.log(bestMove.colMove);
    console.log(bestMove.rowShoot);
    console.log(bestMove.colShoot);
    console.log(bestMove.score)

}
findBestMove(arr, arrsize);
arr.map(arr2 =>{
    arr2.map(e=>{
        process.stdout.write(e + ' ')
    })
    console.log()
})

// var arr3 = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,3,3,3,0],
//     [0,0,0,3,3,3,0],
//     [0,0,0,3,3,3,0],
//     [0,0,0,0,0,0,0],
//     [0,2,0,0,0,3,3],
//     [0,0,0,0,0,0,1]]
//
// findBestMove(arr3, arrsize);
// arr3.map(arr2 =>{
//     arr2.map(e=>{
//         process.stdout.write(e + ' ')
//     })
//     console.log()
// })

// var arr5 = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,3,3,3,0],
//     [0,0,2,3,3,3,0],
//     [1,0,0,3,3,3,3],
//     [0,0,0,0,0,1,3],
//     [0,2,0,0,3,3,3],
//     [0,0,0,0,3,0,3]]
//
// findBestMove(arr5, arrsize);
// arr5.map(arr2 =>{
//     arr2.map(e=>{
//         process.stdout.write(e + ' ')
//     })
//     console.log()
// })

var arr6 = [
    [0,0,0,0,0,0,0],
    [0,0,0,3,3,3,0],
    [0,0,2,3,3,3,0],
    [0,0,0,3,3,3,3],
    [0,0,0,3,0,1,3],
    [0,2,0,3,3,3,3],
    [0,0,0,0,3,0,3]]

findBestMove(arr6, arrsize);
arr6.map(arr2 =>{
    arr2.map(e=>{
        process.stdout.write(e + ' ')
    })
    console.log()
})