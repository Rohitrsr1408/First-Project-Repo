let  boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-Container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true; //playerX,playerO;
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetGame=()=>{
    turnO=true;
    count=0;
    msgContainer.classList.add("hide");
    enableBoxes();
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations !! Winner is ${winner} .`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const drawGame=()=>{
    msg.innerText="Game is Draw !!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let patterns of winPatterns){
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos1===pos3){
              showWinner(pos1);
        }
        
    }
}
}
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
          box.innerText="O";
          turnO=false;
          count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
       
   
      if(count===9){
        drawGame();
      }
      else{
      checkWinner();
      }
      box.disabled=true;
    })
    
})

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
