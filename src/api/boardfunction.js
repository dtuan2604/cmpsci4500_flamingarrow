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

export const clearPossiblemove = (array,object,size)=>{
  var tempArray = array
  for(var k = 0; k < size; k++){
    for(var h = 0; h < size; h++)
      if(tempArray[k][h] === object)
        tempArray[k][h] = 0
  }
  return tempArray
}
export const movePiece = (array, start, end)=>{
  var tempArray = array
  tempArray[end[0]][end[1]] = tempArray[start[0]][start[1]]  
  tempArray[start[0]][start[1]] = 0
  return tempArray
}
export const setFire = (array,x,y,object)=>{
  var tempArray = array
  tempArray[x][y] = object
  return tempArray
}
export const isLose = (arr,size,player)=>{
  if(arr.length === 0)
    return false
  for(var row = 0;row < size; row ++)
  {
      for (var colunm = 0; colunm < size; colunm++)
      {
          if(arr[row][colunm] === player)
          {   
            if(row > 0)
            {
              if(arr[row - 1][colunm] === 0)
              return false;
            }
            if(row < size -1)
            {
              if(arr[row + 1][colunm]=== 0)
              return false;
            }
            if(colunm > 0)
            {
              if(arr[row][colunm - 1] === 0)
              return false;
            }
            if(colunm < size -1)
            {
              if(arr[row][colunm + 1] === 0)
              return false;
            }
            if(colunm > 0 && row > 0)
            {
              if(arr[row - 1][colunm - 1] === 0)
              return false;
            }
            if(colunm < size - 1 && row < size - 1)
            {
              if(arr[row + 1][colunm + 1] === 0)
              return false;
            }
            if(colunm < size - 1 && row > 0)
            {
              if(arr[row - 1][colunm + 1] === 0)
              return false;
            }
            if(colunm > 0 && row < size - 1)
            {
              if(arr[row + 1][colunm - 1] === 0)
              return false;
            }  
          }
          
      }
  }
  return true;
}