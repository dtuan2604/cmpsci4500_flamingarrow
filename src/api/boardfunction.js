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
export const possibleMove = (board,x,y,object,size)=>{
    //arr is the 2d array of the game , x is the row of the game , y is the column of the game 
    //display all possible option on right
      var arr = board;
      var row = x;
      var column = y+1;
      while (column < size)
      {
        //if the option is not avaliable, break
        if (arr[row][column] !== 0)
          {
            break;
          }
        //4 means this option is avaliable
        arr[row][column] = object;
        
        column++;//go right unitl out of boundary
      }
  
      row = x;
      column = y-1;
      //display all possible option on left
      while(column >= 0 )
      {
        //if the option is not avaliable, break
          if (arr[row][column] !== 0)
            {
              break;
            }
        //4 means this option is avaliable
        arr[row][column] = object;
        
        column--;//go left unitl out of boundary
          }
      
      
      row = x-1;
      column = y;
      //display all possible option on upside
      while(row >= 0 )
      {
        //if the option is not avaliable, break
        if(arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
        row--;//go down unitl out of boundary
      }
  
        row = x+1;
        column = y;
      //display all possible option on downside
      while(row < size )
      {
        //if the option is not avaliable, break
        if (arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
        row++;//go up unitl out of boundary
      }
      row = x-1;
      column = y+1;
      //display all possible option on right up side
      while(row >= 0 && column < size)
      {
        //if the option is not avaliable, break
        if(arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
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
        if(arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
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
        if(arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
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
        if(arr[row][column] !== 0)
        {
          break;
        }
        //4 means this option is avaliable
        arr[row][column] = object;
        
        row++;
        column++;
        //go up unitl out of boundary
      }
      return arr;
  }