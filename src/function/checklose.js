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
var size1 = 7
var player1 = 2;
var array1 = [
      [0,0,0,0,0,0,0],
      [0,0,0,3,3,3,0],
      [0,3,0,3,1,3,0],
      [0,0,0,3,3,3,3],
      [0,0,0,0,0,0,0],
      [0,0,3,3,3,0,0],
      [0,0,3,2,3,0,0]]

var flag = checklose(array1,size1,player1)
console.info(flag);
var flag = checklose(array1,size1,1);
console.info(flag);
