//Test case
var arrsize = 7
// var arr = [
//           [0,0,0,3,3,0,1],
//           [0,0,0,0,3,3,3],
//           [0,3,0,3,0,0,0],
//           [0,0,0,3,3,3,3],
//           [0,0,0,0,0,0,0],
//           [0,0,3,3,3,3,3],
//           [0,0,3,2,0,3,0]                                                                                     
//         ]
        var arr = [
          [0,0,0,3,0,0,1],
          [0,0,0,0,3,3,3],
          [0,3,0,3,0,0,0],
          [0,0,0,3,3,3,3],
          [0,0,0,0,0,0,0],
          [0,0,3,3,3,3,3],
          [0,0,3,2,0,0,0]                                                                                     
        ]

// arr2 = options(arr,1,1,4,arrsize);
// arr2.map(arr =>{
//     arr.map(e=>{
//         process.stdout.write(e + ' ')
//     })
//     console.log()
// })                 
//End test case


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

function checklose(array1,size1,player1,path1){
    arr = array1;
    var player = player1;
    var size = size1;
    var path = path1;
    for(var row = 0;row < size; row ++)
    {
        for (var colunm = 0; colunm < size; colunm++)
        {
            if(arr[row][colunm] == player)
            {   
              if(row > 0)
              {
                if(arr[row - 1][colunm] == path)
                return false;
              }
              if(row < size -1)
              {
                if(arr[row + 1][colunm]== path)
                return false;
              }
              if(colunm > 0)
              {
                if(arr[row][colunm - 1] == path)
                return false;
              }
              if(colunm < size -1)
              {
                if(arr[row][colunm + 1] == path)
                return false;
              }
              if(colunm > 0 && row > 0)
              {
                if(arr[row - 1][colunm - 1] == path)
                return false;
              }
              if(colunm < size - 1 && row < size - 1)
              {
                if(arr[row + 1][colunm + 1] == path)
                return false;
              }
              if(colunm < size - 1 && row > 0)
              {
                if(arr[row - 1][colunm + 1] == path)
                return false;
              }
              if(colunm > 0 && row < size - 1)
              {
                if(arr[row + 1][colunm - 1] == path)
                return false;
              }  
            }
            
        }
    }
    return true;
}
function countpath(arr)
{
    var arr5 = arr;
    var size = 7;
    var player1 = 2;
    var path = 5;
    var count2 = 0;
    //display all possible path for current pieces of player1
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == player1)
            {
                arr5 = options(arr5,i,j,path,size);
            }
        }
    }

    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == path)
            {
                arr5 = options(arr5,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == path)
            {
                arr5 = options(arr5,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == path)
            {
                arr5 = options(arr5,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == path)
            {
                arr5 = options(arr5,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr5[i][j] == path)
            {
                count2++;
            }
        }
    }
    return count2;
}

var player_1 = 1;
var player_2 = 2;
function predictLoser(arr,current)
{
    var flag;
    var arr3 = arr;
    var arr5 = arr;
    var size = 7;
    var player1 = 1;
    var player2 = 2;
    var path = 4;
    var count1 = 0;
    var count2 = 0;
    var currentplayer = current;
    //display all possible path for current pieces of player1
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == player1)
            {
                arr3 = options(arr3,i,j,path,size);
            }
        }
    }

    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == path)
            {
                arr3 = options(arr3,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == path)
            {
                arr3 = options(arr3,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == path)
            {
                arr3 = options(arr3,i,j,path,size);
            }
        }
    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == path)
            {
                arr3 = options(arr3,i,j,path,size);
            }
        }
    }
    flag = checklose(arr3,size,player2,path);
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++)
        {
            if(arr3[i][j] == path)
            {
                count1++;
            }
        }
    }

    if (flag == false)
    return flag;
    else
    {
      console.log("Here is the one would lose")
      count2 = countpath(arr5);
      if(count1 < count2)
        return player1;
      else if(count1 == count2)
        return currentplayer;
      else
        return player2;

    }

    // console.log(flag);
    // console.log(count1);
    // return arr3;
}
// var arr4 = predictLoser(arr,arrsize,player_1,player_2)
// arr4.map(arr =>{
//     arr.map(e=>{
//         process.stdout.write(e + ' ')
//     })
//     console.log()
// })
var loser = predictLoser(arr,2);
console.log(loser);