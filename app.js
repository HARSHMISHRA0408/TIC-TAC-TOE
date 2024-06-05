let currentPlayer = "X";
let arr = Array(9).fill(null);


function checkWinner() {
    if(
        (arr[0] !== null && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[6] !== null && arr[6]==arr[7] && arr[7]==arr[8])||
        (arr[3] !== null && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[0] !== null && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1] !== null && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2] !== null && arr[2]==arr[5] && arr[5]==arr[8])||
        (arr[0] !== null && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[2] !== null && arr[2]==arr[4] && arr[4]==arr[6])
    ){
        document.write(`Player ${currentPlayer} won the match`);
        
    }
};




function handleClick(el) {
    let player = Number(el.id);       // capturing id from element 
    if(arr[player] !== null) return; //restricting player from rewrite 
    arr[player] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    if(currentPlayer=="X"){  //player switching
        currentPlayer= "O";
    }
    else{
        currentPlayer= "X";
    }
    
    if(!arr.some((e)=> e === null)){
        document.write(`Match Draw (please refresh page)`);
        return;
    }
}