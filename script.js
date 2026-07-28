let boxes =document.querySelectorAll(".box");
let resetbutton =document.querySelector("#reset-button")
let turn0=true //player X,player o

let new_game_button = document.querySelector("#new-game-button");
let message_container = document.querySelector(".message-container");
let message = document.querySelector("#message");
let counter =0;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{turn0=true;
    enableboxes();
    counter=0;
    message_container.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");  
       if(turn0 == true){ // player O
         box.innerText ="O";
         box.style.color = "yellow";
         turn0=false;
        }
        else{
            box.innerText ="X";
            box.style.color = "red";
            turn0=true;
         }
        box.disabled =true;
        counter++;
        checkwinner();
        if(counter === 9){
            showdraw();
        }
        
    });

});

const showwinner = (winner) =>{
    message.innerText = `${winner} is the winner`;
    message_container.classList.remove("hide");
    disableboxes();
}
const showdraw = () =>{
    message.innerText = `Match Draw`;
    message_container.classList.remove("hide");
    disableboxes();
}
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }

}
const checkwinner = () =>{
    for(let pattern of winpatterns){
      //  console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;
    if(position1 !="" && position1 !=="" && position3 !== ""){
        if(position1 === position2 && position2 === position3){
            console.log(`${position1} is the winner`);
           
            showwinner(position1);
        }
    }
}
    };


new_game_button.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);