function options(arr,x,y,object, size) {
  //arr is the 2d array of the game , x is the row of the game , y is the column of the game 
  //display all possible option on right
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
      arr[row][column] = object;
      
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
      arr[row][column] = object;
      
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
      arr[row][column] = object;
      
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
      arr[row][column] = object;
      
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
      if(arr[row][column] != 0)
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
      if(arr[row][column] != 0)
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
      if(arr[row][column] != 0)
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




//this is how a print the array 155-161



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

arr2 = options(arr,2,1,4,arrsize);
// console.log(arr2)
arr2.map(arr =>{
    arr.map(e=>{
        process.stdout.write(e + ' ')
    })
    console.log()
})
//End test case


