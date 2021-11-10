export const initBoard=(size)=>{
    const chesspieces = (size === 6) ? 2 : ((size === 8) ? 3 : 4)
    var tempBoard=[]
    
    for(var k = 0; k < size; k++){
        var row = []
        for(var h = 0; h < size; h++)
            row.push(0)
        tempBoard.push(row)
    }
    
    //initialize random position for chess piece
    var i = 0
    var j = 0
    var x, y
    while(i<chesspieces){
        x = Math.floor(Math.random() * size)
        y = Math.floor(Math.random() * size)
        if(tempBoard[x][y] === 0){
            tempBoard[x][y] = 1
            i++
        }
    }
    while(j<chesspieces){
        x = Math.floor(Math.random() * size)
        y = Math.floor(Math.random() * size)
        if(tempBoard[x][y] === 0){
            tempBoard[x][y] = 2
            j++
        }
    }

    return tempBoard
}